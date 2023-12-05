import {Component} from '@angular/core';


@Component({
  selector: 'app-display-deleting-tasks',
  templateUrl: './display-deleting-tasks.component.html',
  styleUrls: ['./display-deleting-tasks.component.scss']
})
export class DisplayDeletingTasksComponent {
  cols:any[] = [
    {field: 'user', header: 'Исполнитель'},
    {field: 'name', header: 'название задачи'},
    {field: 'status', header: 'Статус'},
    {field: 'date',header: 'Дата'}
  ]

  tasks: any[]= [
    {status:'выполнено',name:'Помыть пол',user:'Миша',date:'15.11.2023'},
    {status:'прросрочено',name:'Выключить утюг',user:'Тест1',date:'29.11.2023'},
    {status:'в работе',name:'Протереть пыли',user:'Маша',date:'30.11.2023'},
    {status:'выполнено',name:'Покормить рыбок',user:'Папа',date:'3.12.2023'},
    {status:'прросрочено',name:'Оплатить квитанции',user:'Мама',date:'23.11.2023'},
    {status:'выполнено',name:'пропылесосить',user:'Робот пылесос',date:'4.12.2023'},
    {status:'прросрочено',name:'Помыть посуду',user:'Тест2',date:'29.11.2023'},
    {status:'в работе',name:'купить продуктов',user:'Папа',date:'2.12.2023'},
    {status:'прросрочено',name:'Купить молоко',user:'Мама',date:'2.12.2023'},
    {status:'в работе',name:'Снять квартиру на новый год',user:'Маша',date:'5.11.2023'},
    {status:'выполнено',name:'Купить подарки на нг',user:'Мища',date:'5.12.2023'},
  ]
}
