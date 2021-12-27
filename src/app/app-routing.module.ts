import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PropertyListComponent } from './pages/property-list/property-list.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ViewPropertyComponent } from './pages/view-property/view-property.component';
import { NavigationBarComponent } from './shared/navigation-bar/navigation-bar.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'property-list', component: PropertyListComponent },
  { path: 'view-property/:id', component: ViewPropertyComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'forgot-password', component: ForgotPasswordPageComponent },
  { path: 'test', component: NavigationBarComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
