import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {
  constructor(private route: Router) { }

  sendToken(token: string) {
    localStorage.setItem("LoggedInUser", token)
  }

  getToken() {
    return localStorage.getItem("LoggedInUser")
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem("LoggedInUser");
    localStorage.removeItem('user_role_id');
    localStorage.removeItem('user_name');
    localStorage.removeItem('email');
    localStorage.removeItem('user_id');
    this.route.navigate(["login"]);
  }

}
