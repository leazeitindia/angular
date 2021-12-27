import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from 'aws-amplify';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  constructor(private router: Router, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  async loginWithCognito() {
    try {
      var user = await Auth.signIn(
        this.email.toString(),
        this.password.toString()
      );

      var tokens = user.signInUserSession;
      if (tokens != null) {
        this._snackBar.open('Login  Successful', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['green-snackbar'],
        });
        let t = this;
        setTimeout(function () {
          t.router.navigate(['/property-list']);
        }, 3300);
      }
    } catch (error) {
      this._snackBar.open('Login failed', 'Close', {
        duration: 3000,
        verticalPosition: 'top',
        panelClass: ['red-snackbar'],
      });
      this.errorMessage = error.message;
    }
  }
}
