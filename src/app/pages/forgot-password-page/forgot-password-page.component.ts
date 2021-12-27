import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.css'],
})
export class ForgotPasswordPageComponent implements OnInit {
  email: string = '';
  code: string = '';
  password: string = '';
  errorMessage1: string="";
  errorMessage2: string="";
  style1: string= "none";
  style2: string="false";

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  async resetPassword() {
    try{
      var response = await Auth.forgotPassword(this.email);
      this.style2 = "true";
      this._snackBar.open('Code Sent to your email id', 'Close', { duration: 3000, verticalPosition: 'top', panelClass: ['green-snackbar'] });
    }catch (error){
      this.errorMessage1 = error
      console.log(error);
    }
  }

  async confirmNewPassword() {
    try{
      var response = await Auth.forgotPasswordSubmit(
        this.email,
        this.code,
        this.password
      );
      this._snackBar.open('Password Reset Successfully', 'Close', { duration: 3000, verticalPosition: 'top', panelClass: ['green-snackbar'] });
        setTimeout(function () {
          window.location.href = '/login';
        }, 3300);
    }catch (error){
      this.errorMessage2 = error;
      console.log(error);

    }
  }
}
