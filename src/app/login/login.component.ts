import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    console.log("working");
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(user => {
      console.log(user);
      localStorage.setItem('userId', user['uid']);
      this.auth.sendToken(this.email)
      this.router.navigate(['/courses']);
    })
  }

}
