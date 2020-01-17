import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  constructor(private db: AngularFireDatabase, private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(res => {
          console.log(res);
          console.log(res['user']['uid']);
          this.db.list(`/users/${res['user']['uid']}`).push({ firstname: this.firstname, lastname: this.lastname });
          alert("user created")
          this.router.navigate(['login']);
          resolve(res);
        }, err => reject(err))
    })

  }

}
