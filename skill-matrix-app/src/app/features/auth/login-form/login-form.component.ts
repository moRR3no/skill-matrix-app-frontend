import {AfterViewInit, Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../../services/auth.service";
import {first} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  loginForm!: FormGroup;
  loading = false;
  error = '';
  allowFormSubmission = true;
  hide = true;

  constructor(
    fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    if (this.authService.userValue) {
      this.router.navigate(['/']);
    }
  }

  onSubmit() {
    if (!this.hide) {
      this.allowFormSubmission = false;
      setTimeout(() => {
        this.allowFormSubmission = true;
      }, 1000);
      return;
    }

    this.error = '';
    this.loading = true;
    this.authService.login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value)
      .pipe(first())
      .subscribe({
        next: () => {
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigate(["/dashboard"]);
        },
        error: error => {
          this.loading = false;
          this.error = error;

          this.snackBar.open('Incorrect username or password', 'Close', {
            duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'center',
            panelClass: ['snackbar-error']
          });
        }
      });
  }
}
