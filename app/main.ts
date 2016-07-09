import { bootstrap }    from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import { AppComponent } from './components/app/app.component';
import { APP_ROUTER_PROVIDERS} from './app.routes';
import { HTTP_PROVIDERS } from '@angular/http';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
])
.catch(err => console.error(err));