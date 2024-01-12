import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public items: any;

  public authorizationUser: string = localStorage.getItem('авторизован') ?? ''

  ngOnInit() {
    this.items = [
      {
        label: 'Вход',
        icon: 'pi pi-sign-in',
        items: [
          {label: 'Авторизация', icon: 'pi pi-user', routerLink: 'Authorization'},
          {label: 'Регистриция', icon: 'pi pi-user-plus', routerLink: 'Registration'},
          {label: 'Выход', icon: 'pi pi-user-minus', routerLink: 'Exit'},
        ]
      },
      {
        label: 'Задачи',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {label: 'Задачи', icon: 'pi  pi-table', routerLink: 'Tasks'},
          {label: 'Категории', icon: 'pi  pi-list', routerLink: 'TasksCategories'},
        ]
      },
    ];
  }
}
