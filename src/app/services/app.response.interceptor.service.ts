import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
//import { environment } from 'path to environment/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { ConstantConfigService } from '../services/constant-config.service';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  
  
  //dataStream: BehaviorSubject<any> = new BehaviorSubject('Arvind Ng 7');

  //dataStream = new BehaviorSubject('Test Arvind');
  //currentMessage = this.messageSource.asObservable();

  private messageSource = new BehaviorSubject('none');
  dataStream = this.messageSource.asObservable();

  changeMessage(message:string) {
    //console.log(message);
    this.messageSource.next(message);
  }

  // dataStream$(): Observable<any> {
  //   return this.dataStream().asObservable();
  // }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //Get Auth Token from Service which we want to pass thr service call
    //const authToken: any = 'Bearer ${sessionStorage.getItem("jwtToken")}'
    const authToken: any = localStorage.getItem(ConstantConfigService.accessToken);

    if (authToken) {
        request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + authToken) });
    }
    console.log(request.headers);
    // request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    request = request.clone({ headers: request.headers.set('Content-Type', 'application/x-www-form-urlencoded')});
    //request = request.clone({ headers: request.headers.set('x-Trigger', 'CORS')});
    // request = request.clone({ headers: request.headers.set('Accept', 'application/json,text/plain,application/x-www-form-urlencoded, multipart/form-data') });
    if (!request.headers.has('Content-Type')) {
        // request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        // request = request.clone({ headers: request.headers.set('Content-Type', 'application/x-www-form-urlencoded') });
    }
    console.log(request.headers);
    // request = request.clone({ headers: request.headers.set('Content-Type', 'application/json,text/plain,application/x-www-form-urlencoded, multipart/form-data') });
    // request = request.clone({ headers: request.headers.set('Accept', 'application/json,text/plain,application/x-www-form-urlencoded, multipart/form-data') });
    // //request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    // request = request.clone({ headers: request.headers.set('Access-Control-Allow-Origin', '*') });
    // request = request.clone({ headers: request.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS') });
    // request = request.clone({ headers: request.headers.set('Access-Control-Allow-Credentials', 'true') });
    // request = request.clone({ headers: request.headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept') });
    //request = request.clone({ headers: request.headers.set('x-frame-options','SAMEORIGIN') });
    // Clone the service request and alter original headers with auth token.
    // const authReq = req.clone({
    //   headers: req.headers.set('Content-Type', 'application/json').set('Authorization', authToken)
    // });
 
    // authReq = req.clone({ setHeaders: { 'Authorization': authToken, 'Content-Type': 'application/json'} });

    // Send cloned request with header to the next handler.
    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        console.log("Service Response thr Interceptor");
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        console.log("err.status", err);
        if (err.status === 401 || err.status === 403) {
            //location.href = '/login'; 
          //console.log("===========");
          //console.log(err.error.error);
          //console.log("===========");
          //Observable.currentMessage = this.messageSource.next(err.error.error);
          //return Observable.throw(err.error.error);
          //this.currentMessage = err.error.error;
          //this.dataStream.next(err.error.error);
          //this.changeMessage(err.error.error);
          //return Observable.create(currentMessage => currentMessage.next("err.error.error"));
          //console.log("===========");
          //console.log("Unauthorized Request - In case of Auth Token Expired");
        }
      }
    });
  }
}
