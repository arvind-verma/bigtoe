import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
// import { Http, Response, Headers, RequestOptions } from '@angular/http'; 
import { AuthenticationService } from '../../services/authentication.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthenticationService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    if (localStorage.getItem('data') != 'undefined' && localStorage.getItem('data') != null) {
      this.router.navigate(['/map']);
    }

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  submitted: boolean = false;
  onSubmit() {


    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    else {
      var formDatas = "email=" + this.loginForm.get('email').value + "&password=" + this.loginForm.get('password').value;
      this.authService.authLogin(formDatas).subscribe(
        data => {
          if (data['ResponseCode'] == 1) {
            localStorage.setItem('data', JSON.stringify(data));
            this.router.navigate(['/map']);
          }
          else {
            alert("error");
          }
        },
        error => {
          let t = error
          alert(t['error']['Comments']);
        }
      )
    }
  }

}
