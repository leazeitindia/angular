import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent implements OnInit {
  public isLoggedIn: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.isUserLoggedIn();
  }
  async isUserLoggedIn() {
    try {
      var currentSessionData = await Auth.currentSession();
      this.isLoggedIn = currentSessionData.isValid();
      console.log(this.isLoggedIn);
    } catch (error) {
      // console.log(error);
    }
  }

  async logout() {
    try {
      console.log("logging out");
      await Auth.signOut();
      this.isLoggedIn = false;
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  }

  toggleMenu(navWrapper) {
    if (navWrapper.classList.contains('active')) {
      navWrapper.setAttribute('aria-expanded', 'false');
      navWrapper.setAttribute('aria-label', 'menu');
      navWrapper.classList.remove('active');
      navWrapper.classList.add('myClose');
    } else {
      navWrapper.classList.add('active');
      navWrapper.setAttribute('aria-label', 'close menu');
      navWrapper.setAttribute('aria-expanded', 'true');
      navWrapper.classList.remove('myClose');
    }
  }
}
