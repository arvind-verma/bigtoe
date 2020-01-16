import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: SocialUser;
  loggedIn: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthenticationService,
    private http: HttpClient,
    private appService : AppService
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
            debugger;
            localStorage.setItem('data', JSON.stringify(data));
            let statusData = {
              'show_Login': 'false'
            }
            this.appService.setData(statusData);
            this.router.navigate(['/map']);
            location.reload();
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
