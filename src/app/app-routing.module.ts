import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { AuthGuard } from './guards';
import { HeaderComponent } from './layout/header/header.component';
import { Layout2Component } from "./layout/layouts/layout-2/layout.component";
import { AuthResolver } from './resolver/auth.resolver';

// const routes: Routes = [
// { path: '', component: LoginComponent},
// { path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard] },
// { path: 'header', component: HeaderComponent,canActivate: [AuthGuard] },
// { path: 'free-flow-upload', component: FreeFlowUploadComponent},
// { path: 'sign-doc', component: SignDocComponent},
//  //otherwise redirect to home
// { path: '**', redirectTo: 'LoginComponent' }
// ];
const routes: Routes = [
  {
    path: "",
    component: Layout2Component,
    children: [
      {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
      },

      {
        path: "login",
        loadChildren: "./pages/login/login.module#LoginModule"
      },
      {
        path: "register",
        loadChildren: "./pages/register/register.module#RegisterModule"
      },
      {
        path: "map",
        loadChildren: "./pages/map/map.module#MapModule"
      },
      {
        path: "teacher-profile",
        loadChildren: "./pages/teacherprofile/teacherprofile.module#TeacherprofileModule"
      },
      {
        path: "booking-details",
        loadChildren: "./pages/booking-details/booking-details.module#BookingDetailsModule"
      },
      {
        path: "booking-details-phone",
        loadChildren: "./pages/booking-details-phone/booking-details-phone.module#BookingDetailsPhoneModule"
      },
      {
        path: "booking-details-directions",
        loadChildren: "./pages/booking-details-directions/booking-details-directions.module#BookingDetailsDirectionsModule"
      },
      {
        path: "booking-details-note",
        loadChildren: "./pages/booking-details-note/booking-details-note.module#BookingDetailsNoteModule"
      },
      {
        path: "payment-details",
        loadChildren: "./pages/payment-details/payment-details.module#PaymentDetailsModule"
      },
      {
        path: "congratulations",
        loadChildren: "./pages/congratulations/congratulations.module#CongratulationsModule"
      }
    ]
  }
];

// @NgModule({
//     imports: [RouterModule.forRoot(routes, {useHash: true})],
//     exports: [RouterModule]
// })
// export class AppRoutingModule {
// }
@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [
    AuthResolver
  ]
})
export class AppRoutingModule { }
