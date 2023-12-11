import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmationService, MessageService} from "primeng/api";
import {TransferringCategoryService} from "../../../transferring-category.service";

interface category {
    name: string
    id: string
    description?: string
}

@Component({
    selector: 'app-adding-deleting-categories',
    templateUrl: './adding-deleting-categories.component.html',
    styleUrls: ['./adding-deleting-categories.component.scss'],
    providers: [TransferringCategoryService],
})
export class AddingDeletingCategoriesComponent {

    submitted: boolean = false;

    categoryDialog: boolean = false;

    category: any;

    public categories: category[] = [
        {name: 'домашние дела', id: '1',description:'Уборк, Стирка, То что мама заставит сделать'},
        {name: 'Работа', id: '1',description:'Стажирока в лучшей компании мира!!!'},
        {name: 'Альденте', id: '1',},
        {name: 'учеба', id: '1',description:'Надоела эта ваша шарага'},
    ]

    cols: any[] = [
        {field: 'name', header: 'Название категории',},
        {field: 'description', header: 'Описание категории',},
    ]

    constructor(public messageService: MessageService, public confirmationService: ConfirmationService) {
    }

    hideDialog() {
        this.categoryDialog = false;
        this.submitted = false;
    }

    OpenNew() {
        this.category = {};
        this.submitted = false;
        this.categoryDialog = true;
    }

    saveCategory() {
        this.submitted = true;

        if (this.category.name.trim()) {
            if (this.category.id) {
                this.categories[this.findIndexById(this.category.id)] = this.category;
            } else {
                this.category.id = this.createId();
                this.categories.push(this.category);
            }

            this.categories = [...this.categories];
            this.categoryDialog = false;
        }
        this.categories = [...this.category];
        this.categoryDialog = false;
        this.category = {};
    }

    editCategory(category: category) {
        this.category = {...category};
        console.log(this.category = {...category})
        this.categoryDialog = true;
    }

    deleteCategory(category: category) {
        console.log('dadss')
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + this.category.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.categories = this.categories.filter(val => val.id !== category.id);
                this.category = {};
                this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product Category', life: 3000});
            }

        });
        console.log('dad222')
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.categories.length; i++) {
            if (this.categories[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
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
}
