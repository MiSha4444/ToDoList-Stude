import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
    selector: 'app-exit',
    templateUrl: './exit.component.html',
    styleUrl: './exit.component.scss'
})
export class ExitComponent implements OnInit {
  constructor(public confirmationService: ConfirmationService, public messageService: MessageService,private router:Router) {
  }

  ngOnInit() {
    this.confirmationService.confirm({

      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
    });
  }


  exit() {
    localStorage.setItem('авторизован', '')
    this.router.navigate(['Authorization'])
  }
}
