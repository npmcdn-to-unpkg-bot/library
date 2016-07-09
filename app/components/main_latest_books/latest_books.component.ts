import { Component, OnInit } from '@angular/core';
//import { ROUTER_DIRECTIVES } from '@angular/router'
import { ApiService } from '../../../app/services/api';
@Component({
    selector: 'latest-books',
    templateUrl: 'app/components/main_latest_books/latest_books.html',
    directives: [],
    providers: [ApiService]
})

export class LatestBooksComponent implements OnInit {
    latest_books = []
    book = [];
    index = 0

    constructor(
        private apiService: ApiService) { }

    getLatestBooks() {
        this.apiService
            .post('latest_books', {})
            .then(books => {
                this.latest_books = books;
                this.setBook();
            });
    }
    
    ngOnInit() {
        this.getLatestBooks();
    }
    
    setBook() {
        this.book = this.latest_books[this.index];
    }

    prev() {
        if (this.index > 0) {
            this.index -= 1;
            this.setBook();
        }
    }

    next() {
        if (this.index < this.latest_books.length - 1) {
            this.index += 1
            this.setBook();
        }
    }

}


