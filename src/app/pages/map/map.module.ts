import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { MapComponent } from "./map.component";
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { AgmCoreModule } from '@agm/core';
const MAP_ROUTE = [{ path: '', component: MapComponent }];

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    //CookieService,
    RouterModule.forChild(MAP_ROUTE),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCtzs4xUKRtUwFlJOTQOeLX8qTG8hprZIw',
      libraries: ['places']
    }),
    MatGoogleMapsAutocompleteModule.forRoot(),
  ]
})
export class MapModule {}