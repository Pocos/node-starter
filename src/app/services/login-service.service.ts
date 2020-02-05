import { Injectable, OnInit } from '@angular/core';
import { SetUpUser } from '../setUpUser';
import { FormGroup, FormBuilder } from '@angular/forms';
import { of, Observable } from 'rxjs';
import { SubscribeService } from './subscribe.service';
import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from '../routing.module';
import { Router } from '@angular/router';
import { userList } from '../userList';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://www.mocky.io/v2/5e3451963000005b00d9641f';
  getUrl = 'http://localhost:3000/login';
  tokenUrl;
  upFriendsList2;
  searchedUser: SetUpUser ;
  currentUserName: string;
  loginData;
  constructor(private usersList: SubscribeService, private http: HttpClient, private route: Router) {}


    /** getToken() {
    let t: string;
    let tokenUrl1 = this.http.get('http://www.mocky.io/v2/5e1dde3d3600004d00c7447c')
    .subscribe(data => { t = JSON.stringify(data); localStorage.setItem('token1', t); this.tokenUrl = data; });
  } **/

  getToken() {
    return this.http.get('http://www.mocky.io/v2/5e1dde3d3600004d00c7447c');
  }

  getUsers() {
    return this.http.get(this.url);
    // .subscribe(data => {this.upFriendsList2 = data; });
  }

  login(user: FormGroup, usersList: SetUpUser[]) {


    this.http.post(this.getUrl, user.value)
    .subscribe( data => {this.loginData = data; if (data !== null || undefined || NaN) { localStorage.setItem('token', this.loginData); } },
      err => console.log(err),
      () => console.log('Login success!')
    );

    for (let i = 0; i < usersList.length ; i++) {
    if (user.value.email === usersList[i].email && user.value.telephoneNumber == usersList[i].telephoneNumber && user.value.password === usersList[i].password) {
      console.log(usersList[2].name);
      this.currentUserName = userList[i].name;
      return of (true);
     }
    }
    return of (false);
}


}

