import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VerificationService} from "../../service/verification.service";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [VerificationService]
})
export class RegistrationComponent implements OnInit {
  public registrationform!: FormGroup;

  constructor( private verificationService: VerificationService) {
  }

  ngOnInit() {
    this.registrationform = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
      ]),
      password: new FormControl('', [Validators.required, Validators.min(6)]),
      date: new FormControl(''),
      username: new FormControl('')
    })
  }

  submitRegistration() {
    this.verificationService.userRegistration(this.registrationform)
  }
}
