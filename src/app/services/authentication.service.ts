import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {


  constructor(private http: HttpClient) {

  }

  authLogin(formData) {
    return this.http.post("http://18.214.252.20/Authv3/login", formData);
    // return this.http.post("https://bigtoe.app/Authv3/login", formData);
  }

  register(user) {
    return this.http.post("http://18.214.252.20/Authv3/register", user);
  }

  map(formDatas) {
    return this.http.post("http://18.214.252.20/Studentv4/getStudentAddress", formDatas);
  }

  saveStudentAddress(data) {
    return this.http.post("http://18.214.252.20/Studentv4/saveStudentAddress", data);
  }

  searchByTeacherOnDemand(data) {
   // return this.http.post("http://18.215.216.157/TeacherOnDemand/searchByTeacherOnDemand", data);
    return this.http.post("https://bigtoe.app/TeacherOnDemand/searchByTeacherOnDemand", data);
  }

}