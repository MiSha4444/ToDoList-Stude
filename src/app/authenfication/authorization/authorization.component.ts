import {Component, } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent {
  public login: string ='';
  public password: string = '';

  authorizationEvent(){
    console.log('dada');
    if (this.login == 'misha' && this.password == '4895')
    {
      console.log('вход');
    }
  }
}
