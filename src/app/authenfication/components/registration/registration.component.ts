import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {

  public registrationForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.email,
      Validators.required,
    ]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    username: new FormControl('')
  })

  public registrationInvalid: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public constructor(private router: Router) {
  }

  public submitRegistration() {
    if (localStorage.getItem(this.registrationForm.value.email)) {
      this.registrationInvalid.next(true);
      return
    }
    let user = this.registrationForm.value;
    let newUserData = {...user, tasks: [], categories: []};
    localStorage.setItem(this.registrationForm.value.email, JSON.stringify(newUserData));
    this.router.navigate(['Authorization']);
  }

}
