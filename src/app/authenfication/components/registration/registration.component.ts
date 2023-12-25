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

  public registrationform!: FormGroup;

  public registrationIvalid: boolean = false

  constructor(private verificationService: VerificationService, private router: Router) {
  }

  ngOnInit() {
    this.registrationform = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
      ]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      username: new FormControl('')
    })
  }

  submitRegistration() {
    if (localStorage.getItem(this.registrationform.value.email)) {
      this.registrationIvalid = true
      return
    }
    let user = this.registrationform.value
    let newUserData = {...user, tasks: [], categories: []}
    localStorage.setItem(this.registrationform.value.email, JSON.stringify(newUserData))
    this.router.navigate(['Authorization'])
  }

}
