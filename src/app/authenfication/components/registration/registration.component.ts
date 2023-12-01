import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{
  registrationform!: FormGroup;
  ngOnInit() {
    this.registrationform = new FormGroup({
      email: new FormControl('',[
        Validators.email,
        Validators.required,
      ]),
      password: new FormControl('dasd',[Validators.required,Validators.min(6)]),
      date: new FormControl('',[Validators.required]),
      username: new FormControl('')
    })
  }

  submit(){
  }
}
