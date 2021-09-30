import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PropertyListComponent } from './pages/property-list/property-list.component';
import { NavigationBarComponent } from './shared/navigation-bar/navigation-bar.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'property-list/:location', component: PropertyListComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
