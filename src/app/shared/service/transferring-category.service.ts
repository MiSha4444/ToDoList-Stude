import {Injectable, Input, Output} from '@angular/core';
import {category, task} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class TransferringCategoryService {

  GetUserTask(tasks: task[]) {
    let login = localStorage.getItem('авторизован')
    // @ts-ignore
    let userData = JSON.parse(localStorage.getItem(login))
    userData.tasks = tasks
    // @ts-ignore
    localStorage.setItem(login, JSON.stringify(userData))
  }

  getUserCategory(categories: category[]) {
    let login = localStorage.getItem('авторизован')
    // @ts-ignore
    let userData = JSON.parse(localStorage.getItem(login))
    userData.categories = categories
    // @ts-ignore
    localStorage.setItem(login, JSON.stringify(userData))
  }

  deleteTask(task: task) {
    let login = localStorage.getItem('авторизован')
    // @ts-ignore
    let userData = JSON.parse(localStorage.getItem(login))
    userData.tasks
  }
}
