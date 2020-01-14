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

  constructor(private router: Router,private _eref: ElementRef) {

  }

  showLogin;

  onClick(event) {
    if (!this._eref.nativeElement.contains(event.target)) // or some similar check
    this.navdrop.nativeElement.classList.add("visibility");
   }

  ngOnInit() {
    if (localStorage.getItem('data') != undefined && localStorage.getItem('data') != null) {
      this.showLogin = false;
    }
    else {
      this.showLogin = true
    }
    this.navdrop.nativeElement.classList.toggle("visibility");
  }


  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('data');
    this.router.navigate(['/login']);
  }



}
