import {Category, Task} from "../interfaces";
import {BehaviorSubject, Observable} from "rxjs";

export class TransferringCategoryService {
  private tasksSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
  private categoriesSubject: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>([]);

  public tasks$: Observable<Task[]> = this.tasksSubject.asObservable();
  public categories$: Observable<Category[]> = this.categoriesSubject.asObservable();

  public updateUserTasks(tasks: Task[]) {
    let login: string = localStorage.getItem('авторизован') ?? '';
    let userData = JSON.parse(localStorage.getItem(login) ?? '');
    userData.tasks = tasks;
    localStorage.setItem(login, JSON.stringify(userData));
    this.tasksSubject.next(tasks);
  };

  public updateUserCategories(categories: Category[]) {
    let login: string = localStorage.getItem('авторизован') ?? '';
    let userData = JSON.parse(localStorage.getItem(login) ?? '');
    userData.categories = categories;
    localStorage.setItem(login, JSON.stringify(userData));
    this.categoriesSubject.next(categories);
  };
}
