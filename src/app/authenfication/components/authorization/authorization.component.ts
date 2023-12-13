import {Component, OnInit,} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VerificationService} from "../../service/verification.service";
import {find} from "rxjs";

@Component({
    selector: 'app-authorization',
    templateUrl: './authorization.component.html',
    styleUrls: ['./authorization.component.scss'],
    providers: [VerificationService],
})

export class AuthorizationComponent implements OnInit {
    public authorizationFlag: boolean = this.verificationService.authorizationFlag;

    public authorizationForm!: FormGroup;

    constructor(private verificationService: VerificationService) {
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

    public submit() {
        for (let i = 0; i < localStorage.length; i++) {
            // @ts-ignore
            let email: string = localStorage.key(i);
            // @ts-ignore
            let password = JSON.parse(localStorage.getItem(email)).password
            console.log(email == this.authorizationForm.value.login && password == this.authorizationForm.value.password)
            if (email == this.authorizationForm.value.login && password == this.authorizationForm.value.password) {
                console.log('вход')
            }
        }
    }

}
