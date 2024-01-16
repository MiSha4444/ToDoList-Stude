import {Component, OnInit} from '@angular/core';
import {ConfirmationService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrl: './exit.component.scss',
  providers: [ConfirmationService]
})
export class ExitComponent implements OnInit {
  constructor(public confirmationService: ConfirmationService, private router: Router) {
  }

  public ngOnInit() {
    this.confirmationService.confirm({
      message: 'Вы правда хотите выйти ?',
      header: 'Выход',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        localStorage.setItem('авторизован', '');
        this.router.navigate(['Authorization']);
      },
      reject: () => {
        this.router.navigate(['Tasks']);
      }
    });
  }
}
