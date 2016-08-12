import { Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'
import {Router} from '@angular/router';
import { NgForm }    from '@angular/forms';
import { ApiService } from '../../../app/services/api';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
    selector: 'login',
    templateUrl: 'app/components/login/login.html',
    directives: [ROUTER_DIRECTIVES],
//    providers: [ApiService]
})
export class LoginComponent {

    model = {email: null, password: null}

    constructor(
        private apiService: ApiService,
        private router: Router) { }

    login() {
        console.log(this.model)
        this.apiService
            .post('login', { 'user': JSON.parse( JSON.stringify(this.model))})
            .then(login => {
                if(login.error){
                    console.log(login.error)
                }else{
                    console.log('ok')
                    Cookie.set('cookie.is', '1');
                    Cookie.set('cookie.s', login.result.token);
                    Cookie.set('lib_usr', login.result.first_name + ' ' + login.result.last_name);
                    this.router.navigateByUrl('home');
                }
            });
    }
}

