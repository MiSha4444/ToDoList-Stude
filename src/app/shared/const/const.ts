import {MenuBarHeader} from "../interfaces";
import {CanActivateFn} from '@angular/router';

export const MENU_BAR: MenuBarHeader[] = [
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


export const NO_AUTH_GUARD: CanActivateFn = (): boolean => {
  return localStorage.getItem('авторизован') !== '';
};


export const AUTH_GUARD: CanActivateFn = (): boolean => {
  return localStorage.getItem('авторизован') === '';
};
