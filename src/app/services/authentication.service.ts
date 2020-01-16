import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConstantConfigService } from '../services/constant-config.service'


@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  APiUrl: string;
  
  constructor(private http: HttpClient) {
    this.APiUrl = ConstantConfigService.APiUrl;
  }

  authLogin(formData) {
    // return this.http.post("http://18.214.252.20/Authv3/login", formData);
    return this.http.post(this.APiUrl + "Authv3/login", formData);
  }

  register(user) {
    return this.http.post(this.APiUrl + "Authv3/register", user);
    // return this.http.post("http://18.214.252.20/Authv3/register", user);
  }

  map(formDatas) {
    return this.http.post(this.APiUrl + "Studentv4/getStudentAddress", formDatas);
    // return this.http.post("http://18.214.252.20/Studentv4/getStudentAddress", formDatas);
  }

  saveStudentAddress(data) {
    return this.http.post(this.APiUrl + "Studentv4/saveStudentAddress", data);
    // return this.http.post("http://18.214.252.20/Studentv4/saveStudentAddress", data);
  }

  searchByTeacherOnDemand(data) {
    // return this.http.post("http://18.215.216.157/TeacherOnDemand/searchByTeacherOnDemand", data);
    return this.http.post(this.APiUrl + "TeacherOnDemand/searchByTeacherOnDemand", data);
  }

}