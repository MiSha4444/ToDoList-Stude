import {Component} from '@angular/core';
import {MENU_BAR} from "./shared/const/const";
import {MenuBarHeader} from "./shared/interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public items: MenuBarHeader[] = MENU_BAR;
  public authorizationUser: string = localStorage.getItem('авторизован') ?? '';
}
