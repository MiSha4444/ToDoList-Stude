import {Component} from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {TransferringCategoryService} from "../../../shared/service/transferring-category.service";
import {category, task} from "../../../shared/interfaces";

@Component({
    selector: 'app-display-deleting-tasks',
    templateUrl: './display-deleting-tasks.component.html',
    styleUrls: ['./display-deleting-tasks.component.scss'],
    providers: [MessageService, ConfirmationService, TransferringCategoryService]
})
export class DisplayDeletingTasksComponent {

    submitted: boolean = false;

    taskDialog: boolean = false;

    cat: category[] | undefined

    status: string[] = ['выполнено', 'просрочено', 'в работе'];

    constructor(public messageService: MessageService, public confirmationService: ConfirmationService , public transServise:TransferringCategoryService) {
        this.cat = this.transServise.cat
    }


    cols: any[] = [
        {field: 'user', header: 'Исполнитель'},
        {field: 'name', header: 'Название задачи'},
        {field: 'status', header: 'Статус'},
        {field: 'date', header: 'Дата'},
        {field: 'category', header: 'Категория'},
    ]

    public tasks: task[] = [
        {status: 'выполнено', name: 'Помыть пол', user: 'Миша', date: '15.11.2023', category: 'уборка', id: 1},
        {status: 'просрочено', name: 'Выключить утюг', user: 'Тест1', date: '29.11.2023', category: 'срочные дела', id: 2},
        {status: 'в работе', name: 'Протереть пыли', user: 'Маша', date: '30.11.2023', category: 'уборка', id: 3},
        {status: 'выполнено', name: 'Покормить рыбок', user: 'Папа', date: '3.12.2023', category: 'домашние дела', id: 4},
        {
            status: 'просрочено',
            name: 'Оплатить квитанции',
            user: 'Мама',
            date: '23.11.2023',
            category: 'срочные дела',
            id: 5
        },
        {status: 'выполнено', name: 'пропылесосить', user: 'Робот пылесос', date: '4.12.2023', category: 'уборка', id: 6},
        {status: 'просрочено', name: 'Помыть посуду', user: 'Тест2', date: '29.11.2023', category: 'домашние дела', id: 7},
        {status: 'в работе', name: 'купить продуктов', user: 'Папа', date: '2.12.2023', category: 'домашние дела', id: 8},
        {status: 'просрочено', name: 'Купить молоко', user: 'Мама', date: '2.12.2023', category: 'срочные дела', id: 9},
        {
            status: 'в работе',
            name: 'Снять квартиру на новый год',
            user: 'Маша',
            date: '5.11.2023',
            category: 'срочные дела', id: 10
        },
        {
            status: 'выполнено',
            name: 'Купить подарки на нг',
            user: 'Мища',
            date: '5.12.2023',
            category: 'срочные дела',
            id: 11
        },
    ]

    task: any

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
}
