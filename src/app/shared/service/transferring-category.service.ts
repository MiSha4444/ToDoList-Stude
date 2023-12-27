import {Injectable, Input, Output} from '@angular/core';
import {category, task} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class TransferringCategoryService {

  GetUserTask(tasks: task[]) {
    let login = localStorage.getItem('авторизован');
    if (login) {
      let userData = JSON.parse(login);
      userData.tasks = tasks;
      localStorage.setItem(login, JSON.stringify(userData));
    }
  }

  getUserCategory(categories: category[]) {
    let login = localStorage.getItem('авторизован');
    if (login) {
      let userData = JSON.parse(login);
      userData.categories = categories;
      localStorage.setItem(login, JSON.stringify(userData));
    }

  }

  deleteTask(task: task) {
    let login = localStorage.getItem('авторизован');
    if (login){
      let userData = JSON.parse(login);
      userData.tasks;
    }
  }
}
