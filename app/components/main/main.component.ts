import { Component, OnInit  } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'
import { LatestBooksComponent} from '../main_latest_books/latest_books.component';
import { ArticlesComponent} from '../articles/articles.component';
import { OpenInfoComponent} from '../open_info/open_info.component';


@Component({
  selector: 'main-component',
  templateUrl: 'app/components/main/main.html',
  directives: [ROUTER_DIRECTIVES, LatestBooksComponent, ArticlesComponent, OpenInfoComponent],
  
})

export class MainComponent{ }

