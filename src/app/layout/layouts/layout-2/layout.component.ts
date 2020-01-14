import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class Layout2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('data') != 'undefined' && localStorage.getItem('data') != null) {
      this.router.navigate(['/map']);
    }
  }

}
