import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VerificationService} from "../../service/verification.service";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [VerificationService]
})
export class RegistrationComponent implements OnInit {

  public registrationForm!: FormGroup;

  public registrationInvalid: boolean = false

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
      ]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      username: new FormControl('')
    })
  }

  submitRegistration() {
    if (localStorage.getItem(this.registrationForm.value.email)) {
      this.registrationInvalid = true;
      return;
    }
    let user = this.registrationForm.value;
    let newUserData = {...user, tasks: [], categories: []};
    localStorage.setItem(this.registrationForm.value.email, JSON.stringify(newUserData));
    this.router.navigate(['Authorization']);
  }

}
