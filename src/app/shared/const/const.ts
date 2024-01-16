import {MenuBarHeader} from "../interfaces";

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
