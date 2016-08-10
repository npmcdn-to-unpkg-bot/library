import { Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'
import {Router} from '@angular/router';
import { NgForm }    from '@angular/forms';
import {UserRegistration} from '../../classes/user_registration'
import { ApiService } from '../../../app/services/api';

@Component({
    selector: 'registration',
    templateUrl: 'app/components/registration/registration.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ApiService]
})
export class RegistrationComponent {

    constructor(
        private apiService: ApiService,
        private router: Router) { }
    model = new UserRegistration();

    registration() {
        this.apiService
            .post('signup', { 'user': JSON.parse( JSON.stringify(this.model))})
            .then(registration => {
                if(registration.error){
                    alert(registration.error[0]);
                }else{
                    alert('Rejestracja przebiegła pomyslnie')
                    this.router.navigateByUrl('home');
                }
            });
    }
}

