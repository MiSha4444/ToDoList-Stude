import {Injectable, Input, Output} from '@angular/core';
import {category, task} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class TransferringCategoryService {

  GetUserTask(tasks: task[]) {
    let login = localStorage.getItem('авторизован') ?? '';
    let userData = JSON.parse(localStorage.getItem(login) ?? '');
    userData.tasks = tasks;
    localStorage.setItem(login, JSON.stringify(userData));
  }

  getUserCategory(categories: category[]) {
    let login = localStorage.getItem('авторизован') ?? '';
    let userData = JSON.parse(localStorage.getItem(login) ?? '');
    userData.categories = categories;
    localStorage.setItem(login, JSON.stringify(userData));
  }
}
