import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { ConstantConfigService } from '../services/constant-config.service';
//import { JwtHelperService } from "@auth0/angular-jwt";
const helper = {};
@Injectable()
export class AuthResolver implements Resolve<Observable<string>> {
  constructor() {}

  resolve() {
    var expireToken; 
    const authToken: any = localStorage.getItem(ConstantConfigService.accessToken);
    if(authToken!="" && authToken!=null){
      const decodedToken = '';
      var current_time = new Date().getTime() / 1000;
	    if (current_time > decodedToken['exp']) { 
        expireToken = true;
        //console.log("===expire==");
        /* expired */ 
      }else{
        expireToken = false;
        //console.log("===running==");
      }
      // console.log("===decodedToken==");
      // console.log(decodedToken);
      // console.log(current_time);
      // console.log("===decodedToken==");
      //this.router.navigate(['/home']); 
    }else{
      expireToken = true;
    }
    return Observable.of(expireToken);
    //return Observable.of(expireToken).delay(2000);
  }
}