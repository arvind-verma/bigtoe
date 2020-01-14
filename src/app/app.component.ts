import {Component} from '@angular/core';
import {AppService} from './app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'bigtoe';
  spinner : boolean = false;
  

  constructor(private service : AppService){
  }

 
  
}