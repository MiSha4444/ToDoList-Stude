import {Component, OnInit,} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VerificationService} from "../../service/verification.service";
import {BehaviorSubject, interval, Observable, ReplaySubject, Subject, take} from "rxjs";

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
    public authorizationFlag: boolean = this.verificationService.authorizationFlag;

    public authorizationForm!: FormGroup;

    constructor(private verificationService: VerificationService) {

        const obs$ = new Subject();
        obs$.next(1)
        obs$.next(2)
        obs$.next(3)
        obs$.next(4)
        obs$.next(5)
        obs$.subscribe(val => console.log('Подписчик1',val))
        obs$.subscribe(val => console.log('Подписчик2',val))
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
        this.verificationService.checkAuthorization(this.authorizationForm);
    }
}
