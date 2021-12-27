import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { FormsModule } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
// import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css'],
})
export class SignupPageComponent implements OnInit {
  email: string;
  password: string;
  name: string;
  phone: string;
  errorMessage: string = "";
  constructor(private router: Router, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {


  }


  async register() {
    try {
      const user = await Auth.signUp({
        username: this.email,
        password: this.password,
        attributes: {
          email: this.email,
          name: this.name,
          phone_number: this.phone,
        }
      });
      console.log({ user });
      this._snackBar.open('Signup  Successful', 'Close', { duration: 3000, verticalPosition: 'top', panelClass: ['green-snackbar'] });
        setTimeout(function () {
          window.location.href = '/login';
        }, 3300);

      // this._snackBar.open("Login Successfull- Check Email to verify account", "Close");

      this.router.navigate(['login']);
    } catch (error) {
      console.log('error signing up:', error);
      this.errorMessage = error;
    }
  }
}
