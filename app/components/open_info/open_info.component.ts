import { Component, OnInit } from '@angular/core';
//import { ROUTER_DIRECTIVES } from '@angular/router'
import { ApiService } from '../../../app/services/api';
@Component({
    selector: 'open-info',
    templateUrl: 'app/components/open_info/open_info.html',
    directives: [],
    providers: [ApiService]
})

export class OpenInfoComponent implements OnInit {
    open_info = []
    book = [];

    constructor(
        private apiService: ApiService) { }

    getopenInfo() {
        this.apiService
            .post('open_info', {})
            .then(open => {
                this.open_info = open;
            });
    }
    
    ngOnInit() {
        this.getopenInfo();
    }
    
    

}


