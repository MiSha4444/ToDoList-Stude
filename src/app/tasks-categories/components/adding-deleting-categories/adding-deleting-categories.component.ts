import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmationService, MessageService} from "primeng/api";


@Component({
  selector: 'app-adding-deleting-categories',
  templateUrl: './adding-deleting-categories.component.html',
  styleUrls: ['./adding-deleting-categories.component.scss']
})
export class AddingDeletingCategoriesComponent {
  public categories: string[] = ['Домашние дела', 'Учеба', 'Работа']
  category: any

  constructor(public messageService: MessageService, public confirmationService: ConfirmationService) {
  }

  editCategory() {

  }

  deleteCategory(category: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + this.category + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.category = {};
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Task Deleted', life: 3000});
      }

    });
  }
}
