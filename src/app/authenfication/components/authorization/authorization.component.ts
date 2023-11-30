import {Component, OnInit,} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit{
  authorizationform!: FormGroup;
  ngOnInit() {
    this.authorizationform = new FormGroup({
      email: new FormControl('',[
        Validators.email,
        Validators.required,
      ]),
      password: new FormControl('',[Validators.required])
    })
  }
  submit(){
    console.log(this.authorizationform)
  }
}
