import { Component, OnInit } from '@angular/core';
//import { ROUTER_DIRECTIVES } from '@angular/router'
import { ApiService } from '../../../app/services/api';
@Component({
    selector: 'articles',
    templateUrl: 'app/components/articles/articles.html',
    directives: [],
    providers: [ApiService]
})

export class ArticlesComponent implements OnInit {
    articles = []
    book = [];
    index = 1
    max

    constructor(
        private apiService: ApiService) { }

    getArticles() {
        this.apiService
            .post('articles', {page: this.index})
            .then(articles => {
                console.log('yyyyy')
                console.log(articles)
                this.articles = articles.articles;
                this.max = articles.all
            });
    }
    
    ngOnInit() {
        this.getArticles();
    }
    
    prev() {
        if (this.index > 1) {
            this.index -= 1;
            this.getArticles()
        }
    }

    next() {
        if (this.index * 3 < this.max) {
            this.index += 1
            this.getArticles()
        }
    }
    
  

}


