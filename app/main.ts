import { bootstrap }    from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import { AppComponent } from './components/app/app.component';
import { APP_ROUTER_PROVIDERS} from './app.routes';
import { HTTP_PROVIDERS } from '@angular/http';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { ApiService } from '../app/services/api';

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),
  provide(LocationStrategy, {useClass: HashLocationStrategy}),
  ApiService
])
.catch(err => console.error(err));