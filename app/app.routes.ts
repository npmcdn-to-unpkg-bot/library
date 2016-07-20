import { provideRouter, RouterConfig } from '@angular/router';
import { HeaderComponent} from '../app/components/header/header.component';
import { AppComponent} from '../app/components/app/app.component';
import { MainComponent} from '../app/components/main/main.component';
import { BooksComponent} from '../app/components/books/books.component';
import { BookComponent} from '../app/components/book/book.component';

export const routes: RouterConfig = [
  { path: '', component: MainComponent },
  { path: 'home', component: MainComponent },
  { path: 'list-books', component: BooksComponent, children:[
      {path: 'book/:id', component: BookComponent},
      {path: '', component: null},
  ] }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];