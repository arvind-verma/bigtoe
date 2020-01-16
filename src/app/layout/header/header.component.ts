import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppService } from '../../app.service';
import { ConstantConfigService } from '../../services/constant-config.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class HeaderComponent implements OnInit {

  @ViewChild('navdrop', null) navdrop: ElementRef; // Angular Version 8

  dropClick() {
    this.navdrop.nativeElement.classList.toggle("visibility");
  }

  constructor(private router: Router, private _eref: ElementRef, private AppService: AppService) {
  }

  showLogin: boolean = false;
  status;

  onClick(event) {
    if (!this._eref.nativeElement.contains(event.target)) // or some similar check
      this.navdrop.nativeElement.classList.add("visibility");
  }

  ngOnInit() {
    this.AppService.getData.subscribe(
      message => {
        this.showLogin = message['show_Login']
      }
    );
    this.navdrop.nativeElement.classList.toggle("visibility");
  }


  logout() {
    let statusData = {
      'show_Login': 'true'
    }
    this.AppService.setData(statusData);
    // remove user from local storage and set current user to null
    localStorage.removeItem('data');
    this.router.navigate(['/login']);
  }




}
