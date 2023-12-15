import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'ToDoList-stude';
    items: any

    ngOnInit() {
        this.items = [
            {
                label: 'Вход',
                icon: 'pi pi-sign-in',
                items: [
                    {label: 'Авторизация', icon: 'pi pi-user', url: 'Authorization'},
                    {label: 'Регистриция', icon: 'pi pi-user-plus', url: 'Registration',queryParams: 'transitionTo'},
                    {label: 'Выход', icon: 'pi pi-user-minus', },
                ]
            },
            {
                label: 'Задачи',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {label: 'Задачи', icon: 'pi  pi-table', url: '/TasksCategories'},
                    {label: 'Категории', icon: 'pi  pi-list', url: '/Tasks'},
                ]
            }
        ];
    }
}
