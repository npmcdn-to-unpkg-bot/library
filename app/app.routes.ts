import { provideRouter, RouterConfig } from '@angular/router';
import { HeaderComponent} from '../app/components/header/header.component';
import { AppComponent} from '../app/components/app/app.component';
import { MainComponent} from '../app/components/main/main.component';

export const routes: RouterConfig = [
  { path: '', component: MainComponent },
  { path: 'test', component: HeaderComponent },
  { path: 'home', component: MainComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];