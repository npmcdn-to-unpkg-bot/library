import { Component } from '@angular/core';
import { HeaderComponent} from '../header/header.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/components/app/app.html',
  directives: [HeaderComponent]
})
export class AppComponent { }
