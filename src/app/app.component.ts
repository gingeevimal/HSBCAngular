import { Component } from '@angular/core';
import { AuthguardService } from './guard/authguard.service';
// import { AuthService } from './auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataPlatform';
  constructor(public authService: AuthguardService) { }

      ngOnInit(): void {
        this.authService.updateLoggedInStatus();
      }

      login() {
        this.authService.login();
      }

      logout() {
        this.authService.logout();
      }
}
