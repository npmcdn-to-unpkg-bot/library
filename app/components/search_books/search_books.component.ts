import { Component, ViewChild, ElementRef} from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router'
import { DataService } from '../../../app/services/data';
import { ApiService } from '../../../app/services/api';

@Component({
    selector: 'search-books',
    templateUrl: 'app/components/search_books/search_books.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [DataService, ApiService]
})

export class SearchBooksComponent {
    @ViewChild('paginate') paginate: ElementRef;
    selectData = {};
    categories = {};
    allPages = []
    page = 1;
    text = "";
    category = 1;
    type = "";
    books = [];
    constructor(
        private dataService: DataService,
        private apiService: ApiService,
        private router: Router) { }

    ngOnInit() {
        this.selectData = this.dataService.searchData();
        this.type = this.options()[0];
        this.apiService.post('categories', {})
            .then(categories => {
                this.categories = categories.result
            })
    }

    options(): Array<string> {
        return Object.keys(this.selectData);
    }

    getCategories(): Array<string> {
        return Object.keys(this.categories);
    }

    setCategory(id) {
        this.category = id;
    }
    search(search_button = true) {
        if (search_button) {
            this.page = 1;
        }
        this.apiService.post('books', { 'type': this.type, 'text': this.text, 'page': this.page, 'category': this.category })
            .then(books => {
                this.books = books.result.books;
                this.allPages = Array(books.all_pages).fill(1).map((x, i) => i + 1);
            });
        setTimeout(() => {
            this.setActiveclassPagination(this.page);
        }, 100)
    }

    setType(data) {
        this.type = data;
    }

    setPage(num) {
        this.page = num;
        this.search(false);
    }

    plusPage() {
        if (this.page < this.allPages.length) {
            this.page += 1
            this.search(false);
        }
    }
    minusPage() {
        if (this.page > 1) {
            this.page -= 1
            this.search(false);
        }
    }

    setActiveclassPagination(num) {
        for (let test of this.paginate.nativeElement.children) {
            test.classList = []
        }
        this.paginate.nativeElement.children[num].classList.add('active')
    }
    
    onSelect(book) {
    this.router.navigate(['/list-books/book', book.id]);
  }
}


