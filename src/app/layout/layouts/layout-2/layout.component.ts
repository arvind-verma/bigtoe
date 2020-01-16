import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import {AppService} from '../../../app.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [DatePipe]
})
export class Layout2Component implements OnInit {
  refreshToken: any;

  constructor(private router: Router,private datePipe: DatePipe,private AppService : AppService) { }

  ngOnInit() {
    if (localStorage.getItem('data') != 'undefined' && localStorage.getItem('data') != null) {
      this.router.navigate(['/map']);
    }
    else{
      let statusData = {
        'show_Login': 'true'
      }
      this.AppService.setData(statusData);
    }
  }

}
