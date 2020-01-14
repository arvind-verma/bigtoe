import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';

import { AuthenticationService } from '../../services/authentication.service';
import { MustMatch } from '../../helpers/must-match.validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirm_password')
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    var postData = "city=" + '' + "&device_token=" + '' + "&email=" + this.registerForm.get('email').value + "&facebook_token=" + '' + "&firstname=" + this.registerForm.value.firstName + "&lastname=" + this.registerForm.value.lastName + "&latitude=" + '' + "&longitude=" + '' + "&password=" + this.registerForm.get('password').value + "&profile_picture=" + '';
   
    this.authenticationService.register(postData)
      .subscribe(
        data => {
          //alert('Registration successful');
          this.router.navigate(['/map']);
        },
        error => {
          let t = error
          
          alert(t['error']['Comments']);
        }
      );
  }

}
