import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {TransferringCategoryService} from "../../../shared/service/transferring-category.service";
import {Category, Cols, Task} from "../../../shared/interfaces";
import {BehaviorSubject} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {TASK_COLS, TASK_PRIORITY, TASK_STATUS} from "../../const/const";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  providers: [MessageService, ConfirmationService, TransferringCategoryService]
})

export class TasksComponent implements OnInit {

  public $submitted: BehaviorSubject<boolean> = new BehaviorSubject(true);

  public taskDialog: boolean = false;

  public status: string[] = TASK_STATUS;

  public priority: string[] = TASK_PRIORITY;

  public currentDate: Date = new Date();

  public cols: Cols[] = TASK_COLS;

  public tasks: Task[] = [];

  public categories: Category[] = [];

  public taskForm: FormGroup = this.fb.group<Task>({
      category: "",
      date: "",
      id: "",
      name: "",
      priority: "",
      status: "",
      user: ""
    }
  );

  public task: Task = this.taskForm.value;

  public ngOnInit() {
    this.transService.tasks$.subscribe(() => {
      this.tasks = JSON.parse(localStorage.getItem(localStorage.getItem('авторизован') ?? '') ?? '').tasks;
    });

    this.transService.categories$.subscribe(() => {
      this.categories = JSON.parse(localStorage.getItem(localStorage.getItem('авторизован') ?? '') ?? '').categories;
    });
  }

  constructor(public messageService: MessageService,
              public confirmationService: ConfirmationService,
              public transService: TransferringCategoryService,
              private fb: FormBuilder) {
  }

  public hideDialog() {
    this.taskDialog = false;
    this.$submitted.next(false);
  }

  public openNew() {
    this.taskForm.reset();
    this.task = this.taskForm.value;
    this.$submitted.next(false);
    this.taskDialog = true;
  }

  public saveTask() {
    this.$submitted.next(true);
    this.task = this.taskForm.value
    const date: Date = new Date(this.task.date);
    this.task.date = this.task.date ? date.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }) : '';
    if (this.task.name.trim()) {
      if (this.task.id) {
        this.tasks[this.findIndexById(this.task.id)] = this.task;
      } else {
        this.task.id = this.createId();
        this.tasks.push(this.task);
      }
      this.transService.updateUserTasks(this.tasks);
      this.tasks = [...this.tasks];
      this.taskDialog = false;
    }
    console.log(this.tasks)
    this.tasks = [...this.taskForm.value];
    console.log(this.tasks)
    this.taskDialog = false;
    this.task = this.taskForm.value;
  }

  public editTask(task: Task) {
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


  private createId(): string {
    let id: string = '';
    let chars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i: number = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  private findIndexById(id: string): number {
    let index: number = -1;
    for (let i: number = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  public deleteTask(task: Task) {
    this.confirmationService.confirm({
      message: 'Вы правда хотите удалить задачу ' + task.name + '?',
      header: 'Удаление задачи',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.tasks = this.tasks.filter(val => val.id !== task.id);
        this.transService.updateUserTasks(this.tasks);
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Task Deleted', life: 3000});
      }

    });
  }
}
