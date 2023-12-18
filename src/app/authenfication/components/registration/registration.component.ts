import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VerificationService} from "../../service/verification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [VerificationService]
})
export class RegistrationComponent implements OnInit {
  public registrationform!: FormGroup;

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
    let user = this.registrationform.value
    // @ts-ignore
    let newUserData = {...user, tasks: [], categories: []}
    console.log(this.registrationform.value)
    localStorage.setItem(this.registrationform.value.email, JSON.stringify(newUserData))
    this.router.navigate(['Authorization'])
  }

}
