import {Injectable} from '@angular/core';
import {FormGroup} from "@angular/forms";

interface user {
    username: string
    password: string
    date?: string
    city?: string
}

@Injectable({
    providedIn: 'root'
})

export class VerificationService {

    public authorizationFlag: boolean = false;

    private usersData: user[] = [{
        username: "misnash4895@gmail.com",
        password: "1111"
    }, {
        username: "test2@g",
        password: "2222"
    }];

    constructor() {
    }

    public checkAuthorization(authorizationForm: FormGroup) {
        if (authorizationForm.valid && authorizationForm.valid) {
            const checkUser = this.usersData
                .find(users => users.username == authorizationForm.value.login) ?? '';
            //console.log(checkUser.password)
            if (checkUser) {
                const i = checkUser.password == authorizationForm.value.password ?
                    this.authorizationFlag = true : this.authorizationFlag = false;
            }
        }
    }

    public userRegistration(registrationForm: FormGroup) {
        this.usersData.push(registrationForm.value)
        console.log(registrationForm.value)
        console.log(this.usersData)
    }

}
