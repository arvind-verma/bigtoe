import {Component, OnInit} from '@angular/core';
import {trigger, state, animate, transition, style} from '@angular/animations'
import {Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';


@Component({
    selector: 'page-loader',
    templateUrl: './page-loader.component.html',
    styleUrls: ['./page-loader.component.scss']
})
export class PageLoaderComponent implements OnInit {
    
    loading : boolean = true;
    constructor(private router: Router) {
        this.router.events.subscribe((event: Event) => {
            switch (true) {
                case event instanceof NavigationStart: {
                    this.loading = true;
                    break;
                }
                case event instanceof NavigationEnd:
                case event instanceof NavigationCancel:
                case event instanceof NavigationError: {
                    setTimeout(() =>  {
                        this.loading = false;
                    }, 750);
                    break;
                }
                default: {
                    break;
                }
            }
        });
    }
    ngOnInit() {
        setTimeout(() =>  {
            this.loading = false;
        }, 750);
    }

}
