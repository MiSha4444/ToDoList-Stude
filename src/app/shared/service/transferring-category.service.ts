import {Injectable, Input, Output} from '@angular/core';
import {category, task} from "../interfaces";

@Injectable({
    providedIn: 'root'
})
export class TransferringCategoryService {
    private login: string | undefined;

    GetUserTask(tasks: task[]) {
        let login = localStorage.getItem('авторизован')
        // @ts-ignore
        let userData = JSON.parse(localStorage.getItem(login))
        userData.tasks.push(tasks)
        // @ts-ignore
        localStorage.setItem(login, JSON.stringify(userData))
    }

    getUserCategory(category: category[]) {

    }
}
