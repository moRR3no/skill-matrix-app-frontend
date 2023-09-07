import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../../services/auth.service";
import {first} from "rxjs";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  showPassword: boolean = false;


  //TODO: add validations for inputs
  constructor(
    fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService
  ) {this.loginForm = fb.group({
    username: [''],
    password: ['']
  });

    // redirect to home if already logged in
    if (this.authService.userValue) {
      this.router.navigate(['/']);
    }
  }
  //
  // // convenience getter for easy access to form fields
  // get f() {
  //   return this.loginForm.controls;
  // }

  onSubmit() {
    // this.submitted = true;
    //
    // // stop here if form is invalid
    // if (this.loginForm.invalid) {
    //   return;
    // }
    this.error = '';
    this.loading = true;
    this.authService.login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value)
      .pipe(first())
      .subscribe({
        next: () => {
          // get return url from route parameters or default to '/'
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigate([returnUrl]);
        },
        error: error => {
          this.error = error;
          this.loading = false;
        }
      });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}

