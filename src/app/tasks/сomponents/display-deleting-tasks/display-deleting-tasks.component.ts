import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {TransferringCategoryService} from "../../../shared/service/transferring-category.service";
import {category, task} from "../../../shared/interfaces";

@Component({
    selector: 'app-display-deleting-tasks',
    templateUrl: './display-deleting-tasks.component.html',
    styleUrls: ['./display-deleting-tasks.component.scss'],
    providers: [MessageService, ConfirmationService, TransferringCategoryService]
})
export class DisplayDeletingTasksComponent implements OnInit {

    submitted: boolean = false;

    taskDialog: boolean = false;

    status: string[] = ['выполнено', 'просрочено', 'в работе'];

    cols: any[] = [
        {field: 'user', header: 'Исполнитель'},
        {field: 'name', header: 'Название задачи'},
        {field: 'status', header: 'Статус'},
        {field: 'date', header: 'Дата'},
        {field: 'category', header: 'Категория'},
    ]

    public tasks: task[] = []

    protected categories?: category[]

    task: any

    cat: any

    constructor(public messageService: MessageService, public confirmationService: ConfirmationService, public transServise: TransferringCategoryService) {

    }

    ngOnInit() {
        // @ts-ignore
        this.tasks = JSON.parse(localStorage.getItem(localStorage.getItem('авторизован'))).tasks
        // @ts-ignore
        this.categories = JSON.parse(localStorage.getItem(localStorage.getItem('авторизован'))).categories
    }

    hideDialog() {
        this.taskDialog = false;
        this.submitted = false;
    }

    openNew() {
        this.task = {};
        this.submitted = false;
        this.taskDialog = true;
    }

    saveProduct() {
        this.submitted = true;
        if (this.task.name.trim()) {
            if (this.task.id) {
                this.tasks[this.findIndexById(this.task.id)] = this.task;
            } else {
                this.task.id = this.createId();
                this.tasks.push(this.task);
            }
            this.transServise.GetUserTask(this.tasks)
            this.tasks = [...this.tasks];
            this.taskDialog = false;
        }
        this.tasks = [...this.task];
        this.taskDialog = false;
        this.task = {};
    }

    editTask(task: task) {
        this.task = {...task};
        console.log(this.task = {...task})
        this.taskDialog = true;
    }


    createId(): string {
        let id = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        console.log(id)
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
            message: 'Are you sure you want to delete ' + task.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.tasks = this.tasks.filter(val => val.id !== task.id);
                this.task = {};
                this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Task Deleted', life: 3000});
            }

        });
    }

    protected readonly name = name;
}
