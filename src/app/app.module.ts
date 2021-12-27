import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './shared/navigation-bar/navigation-bar.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropertyListComponent } from './pages/property-list/property-list.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import Amplify, { Auth } from 'aws-amplify';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { ViewPropertyComponent } from './pages/view-property/view-property.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BookNowComponent } from './pages/book-now/book-now.component';



Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: 'ap-south',
    userPoolId: 'ap-south-1_e8YePcfYW',
    userPoolWebClientId: '4a2kb38jruo3jspdckc9nlojfm',
    authenticationFlowType: 'USER_PASSWORD_AUTH',
  },
});

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LandingPageComponent,
    FooterComponent,
    PropertyListComponent,
    ErrorPageComponent,
    LoginPageComponent,
    SignupPageComponent,
    ForgotPasswordPageComponent,
    ViewPropertyComponent,
    BookNowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, //ngForm
    ReactiveFormsModule,
    NoopAnimationsModule, //FormsGroup
    MatSnackBarModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
