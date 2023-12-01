import {Component, OnInit,} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VerificationService} from "../../service/verification.service";

interface user {
  username: string
  password: string
}

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
  providers: [VerificationService],
})
export class AuthorizationComponent implements OnInit {
  private authorizationFlag: boolean = false;

  public authorizationform!: FormGroup;

  private users: user[] = [{
    username: "misnash4895@gmail.com",
    password: "1111"
  }, {
    username: "test2@g",
    password: "2222"
  }];

  ngOnInit() {
    this.authorizationform = new FormGroup({
      login: new FormControl('', [
        Validators.email,
        Validators.required,
      ]),
      password: new FormControl('', [Validators.required])

    })
  }

   public submit() {
    if (this.authorizationform.valid && this.authorizationform.valid) {
    }
    const checkUser = this.users
      .find(users => users.username == this.authorizationform.value.login) ?? '';
    //console.log(checkUser.password)
    if (checkUser) {
      const i = checkUser.password == this.authorizationform.value.password ?
        this.authorizationFlag = true
        : this.authorizationFlag = false;
    }

  }
}
