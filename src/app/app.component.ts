import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'online-course';
  constructor(public auth: AuthService, public router: Router){}
  logout() {
    this.auth.logout();
    localStorage.removeItem("userId");
    this.router.navigate(['login']);
  }
}
