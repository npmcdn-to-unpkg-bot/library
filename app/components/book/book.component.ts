import { Component, OnInit} from '@angular/core';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router'
import { ApiService } from '../../../app/services/api';
@Component({
    selector: 'book',
    templateUrl: 'app/components/book/book.html',
    directives: [],
    providers: [ApiService]
})

export class BookComponent implements OnInit {

    private id: number;
    book: {};
    
    constructor(
        private apiService: ApiService,
        private route: ActivatedRoute) { console.log('hhhhh') }

    getBook() {
        this.apiService
            .post('book', { 'id': this.id })
            .then(books => {
                console.log('loool');
                this.book = books.book;
            });
    }
   
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = +params['id'];
            this.getBook();
        });
    }
}



