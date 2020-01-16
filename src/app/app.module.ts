import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppService } from './app.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './services';
import { ResponseInterceptor } from './services/app.response.interceptor.service';
import { EncrDecrServiceService } from './services/encr-decr-service.service';
import { ConstantConfigService } from './services/constant-config.service';
import { AuthGuard } from './guards';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor } from './helpers';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PageLoaderComponent } from './layout/page-loader/page-loader.component';
import { Layout2Component } from './layout/layouts/layout-2/layout.component';
import { TransferOwnershipComponent } from './transfer-ownership/transfer-ownership.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FilterPipe } from './filter.pipe';

export function tokenGetter() {
  return localStorage.getItem("access_token");
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Layout2Component,
    PageLoaderComponent,
    TransferOwnershipComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ResponseInterceptor,
    AppService,
    AuthGuard,
    AuthenticationService,
    //{provide: LocationStrategy, useClass: PathLocationStrategy},
    //Location, {provide: LocationStrategy, useClass: PathLocationStrategy},
    //Location, {provide: LocationStrategy, useClass: HashLocationStrategy},
    EncrDecrServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: JwtInterceptor,
    //   multi: true
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: JwtInterceptor,
    //   multi: true
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ErrorInterceptor,
    //   multi: true
    // }
    // ,{
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: CookieService,
    //   multi: true
    //   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
