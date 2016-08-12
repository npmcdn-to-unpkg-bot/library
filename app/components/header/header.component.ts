import { Component, ViewChild, ElementRef } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'
import { IsLoggedService } from '../../../app/services/isLogged';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
    selector: 'header',
    templateUrl: 'app/components/header/header.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [IsLoggedService]
})
export class HeaderComponent {
    @ViewChild('menu') menu: ElementRef;
    constructor(private logged: IsLoggedService) {
        
    }
    
    User(){
        return Cookie.get('lib_usr')
    }

    //    set active class to element of menu
    menuClick(child) {
        for (let test of this.menu.nativeElement.children) {
            test.classList = []
        }
        this.menu.nativeElement.children[parseInt(child)].classList.add('active_tab')

    }

    logout() {
        console.log('Wyloguj');
        Cookie.set('cookie.is', '0');
    }
}


