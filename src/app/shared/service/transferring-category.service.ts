import {Category, Task} from "../interfaces";

export class TransferringCategoryService {

  GetUserTask(tasks: Task[]) {
    let login = localStorage.getItem('авторизован') ?? '';
    let userData = JSON.parse(localStorage.getItem(login) ?? '');
    userData.tasks = tasks;
    localStorage.setItem(login, JSON.stringify(userData));
  }

  getUserCategory(categories: Category[]) {
    let login = localStorage.getItem('авторизован') ?? '';
    let userData = JSON.parse(localStorage.getItem(login) ?? '');
    userData.categories = categories;
    localStorage.setItem(login, JSON.stringify(userData));
  }
}
