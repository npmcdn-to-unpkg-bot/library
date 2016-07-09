import { Component, ViewChild, ElementRef } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'

@Component({
  selector: 'header',
  templateUrl: 'app/components/header/header.html',
  directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent  {
    @ViewChild('menu') menu:ElementRef;
    
//    set active class to element of menu
    menuClick(child){
        for (let test of this.menu.nativeElement.children){
            test.classList = []
        }
        this.menu.nativeElement.children[parseInt(child)].classList.add('active_tab')
        
    }
}


