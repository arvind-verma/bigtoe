import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { error, element } from 'protractor';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  mapData: any[] = [];
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;

  @ViewChild('search', { static: true }) searchElementRef: ElementRef;
  street_address: any;
  city: string = '';
  zipcode: string = '';
  state: string = '';
  token: any;
  country: string = '';
  student_id: any;
  location: any;

  constructor(private authenticationService: AuthenticationService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private appService : AppService,
    private router : Router
  ) { }

  ngOnInit() {
    this.getStudentAddress();
    let storageData = JSON.parse(localStorage.getItem('data'));
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          //set latitude, longitude and zoom
          this.street_address = place.formatted_address;
          for (let element of place.address_components) {
            for (let type of element.types) {
              if ((type == 'sublocality_level_1') || (type == 'sublocality') || (type == 'locality')) {
                this.city = element['long_name'];
              }
              if (type == 'administrative_area_level_1') {
                this.state = element['long_name']
              }
              if (type == 'postal_code') {
                this.zipcode = element['long_name']
              }
              if (type == 'country') {
                this.country = element['long_name']
              }
            }
          }

          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.token = storageData.Result.token;
          this.student_id = storageData.Result.student_id;

          this.zoom = 12;
          this.saveStudentAddress();
          this.getStudentAddress();
        });
      });
    });
  }


  saveStudentAddress() {
    var addressData = "student_id=" + this.student_id + "&street_address=" + this.street_address + "&city=" + this.city + "&state=" + this.state + "&zipcode=" + this.zipcode + "&country=" + this.country + "&latitude=" + this.latitude + "&longitude=" + this.longitude + "&is_default=0&token=" + this.token + "&neighborhood=&unit_number=";
    this.authenticationService.saveStudentAddress(addressData)
      .subscribe(
        data => {
          console.log(data)
        },
        error => {
          let t = error
          alert(t['error']['Comments']);
        }
      )
  }

  getStudentAddress() {
    let postData = JSON.parse(localStorage.getItem('data'));
    if (postData != null) {
      var formDatas = "token=" + postData.Result.token + "&student_id=" + postData.Result.student_id;
    } else {
      var formDatas = "token=''&student_id=''";
    }

    this.authenticationService.map(formDatas)
      .subscribe(
        data => {
          this.mapData = data['Result'];
        },
        error => {
          let t = error
          alert(t['error']['Comments']);
        }
      );
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }

  markerDragEnd($event: MouseEvent) {
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }

  getAddress(latitude, longitude) {
    this.geoCoder['geocode']({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

  getStudentAddressId(id){
    let data = {
      'student_address_id' : id
    }
    this.appService.setData(data);
    this.router.navigate(['./teacher-profile'])
  }
}
