import {Component, OnInit,} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VerificationService} from "../../service/verification.service";
import {TransferringCategoryService} from "../../../shared/service/transferring-category.service";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
  providers: [VerificationService, TransferringCategoryService],
})

export class AuthorizationComponent implements OnInit {

  public $authIvalid: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  public authorizationForm!: FormGroup;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.authorizationForm = new FormGroup({
      login: new FormControl('', [
        Validators.email,
        Validators.required,
      ]),
      password: new FormControl('', [Validators.required])

    })
  }

  public chekcUser() {
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) != 'авторизован') {
        let email: string = localStorage.key(i) ?? '';
        let login = localStorage.getItem(email) ?? '';
        let password = JSON.parse(login).password;
        if (email == this.authorizationForm.value.login && password == this.authorizationForm.value.password) {
          localStorage.setItem('авторизован', email);
          this.router.navigate(['Tasks']);
          break
        } else {
          this.$authIvalid.next(true);
        }
      }
    }
  }

  protected readonly Boolean = Boolean;
}
