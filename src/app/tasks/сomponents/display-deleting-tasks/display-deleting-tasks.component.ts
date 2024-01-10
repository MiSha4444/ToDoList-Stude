import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {TransferringCategoryService} from "../../../shared/service/transferring-category.service";
import {category, task} from "../../../shared/interfaces";
import {BehaviorSubject} from "rxjs";
import {FormBuilder, FormControl, FormGroup, isFormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-display-deleting-tasks',
  templateUrl: './display-deleting-tasks.component.html',
  styleUrls: ['./display-deleting-tasks.component.scss'],
  providers: [MessageService, ConfirmationService, TransferringCategoryService]
})

export class DisplayDeletingTasksComponent implements OnInit {


  public $submitted: BehaviorSubject<boolean> = new BehaviorSubject(true);

  public taskDialog: boolean = false;

  public status: string[] = ['выполнено', 'просрочено', 'в работе'];

  public priority: string[] = ['Выскоий', 'Средний', 'Низкий'];

  currentDate = new Date();

  public cols: any[] = [
    {field: 'user', header: 'Исполнитель'},
    {field: 'name', header: 'Название задачи'},
    {field: 'status', header: 'Статус'},
    {field: 'date', header: 'Дата'},
    {field: 'category', header: 'Категория'},
    {field: 'priority', header: 'Приоритет задачи'}
  ];

  public tasks: task[] = [];

  protected categories?: category[];

  public task: any;

  taskForm: any;

  constructor(public messageService: MessageService,
              public confirmationService: ConfirmationService,
              public transServise: TransferringCategoryService,
              private fb: FormBuilder,) {
  }

  ngOnInit() {
    this.tasks = JSON.parse(localStorage.getItem(localStorage.getItem('авторизован') ?? '') ?? '').tasks;
    this.categories = JSON.parse(localStorage.getItem(localStorage.getItem('авторизован') ?? '') ?? '').categories;
    this.taskForm = this.fb.group<task>({
        category: "",
        date: "",
        id: "",
        name: "",
        priority: "",
        status: "",
        user: ""
      }
    )
  }

  hideDialog() {
    this.taskDialog = false;
    this.$submitted.next(false);
  }

  openNew() {
    this.taskForm.reset()
    this.task = {}
    this.$submitted.next(false);
    this.taskDialog = true;
  }

  saveTask() {
    this.$submitted.next(true);
    this.task = this.taskForm.value
    this.task.date = this.task.date ? this.task.date.toLocaleString({
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    }) : '';
    if (this.task.name.trim()) {
      if (this.task.id) {
        this.tasks[this.findIndexById(this.task.id)] = this.task;
      } else {
        this.task.id = this.createId();
        this.tasks.push(this.task);
      }
      this.transServise.GetUserTask(this.tasks);
      this.tasks = [...this.tasks];
      this.taskDialog = false;
    }
    this.tasks = [...this.task];
    this.taskDialog = false;
    this.task = {};
  }

  editTask(task: task) {
    this.taskForm.setValue({
      name: task.name,
      category: task.category,
      date: task.date,
      id: task.id,
      priority: task.priority,
      status: task.status,
      user: task.user,
    })
    this.task = {...task};
    this.taskDialog = true;
  }


  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  deleteTask(task: task) {
    this.confirmationService.confirm({
      message: 'Вы правда хотите удалить задачу ' + task.name + '?',
      header: 'Удаление задачи',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.tasks = this.tasks.filter(val => val.id !== task.id);
        this.transServise.GetUserTask(this.tasks);
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Task Deleted', life: 3000});
      }

    });
  }
}
