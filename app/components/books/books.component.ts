import { Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'
import { SearchBooksComponent} from '../search_books/search_books.component';

@Component({
  selector: 'books',
  templateUrl: 'app/components/books/books.html',
  directives: [ROUTER_DIRECTIVES, SearchBooksComponent]
})
export class BooksComponent  {

}