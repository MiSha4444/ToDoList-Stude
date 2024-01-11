import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrl: './exit.component.scss',
  providers: [ConfirmationService, MessageService]
})
export class ExitComponent implements OnInit {
  constructor(public confirmationService: ConfirmationService, public messageService: MessageService, private router: Router) {
  }

  ngOnInit() {
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
