import {Component, OnInit,} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VerificationService} from "../../service/verification.service";
import {TransferringCategoryService} from "../../../shared/service/transferring-category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
  providers: [VerificationService, TransferringCategoryService],
})

export class AuthorizationComponent implements OnInit {

  public authIvalid: boolean = false

  public authorizationForm!: FormGroup;

  constructor(private verificationService: VerificationService, private router: Router) {
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
      // @ts-ignore
      let email: string = localStorage.key(i);
      // @ts-ignore
      let password = JSON.parse(localStorage.getItem(email)).password
      if (email == this.authorizationForm.value.login && password == this.authorizationForm.value.password) {
        localStorage.setItem('авторизован', email)
        this.router.navigate(['Tasks'])
        break
      } else {
        this.authIvalid = true
      }

    }
  }

}
