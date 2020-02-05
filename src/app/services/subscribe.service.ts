import { Injectable } from '@angular/core';
import { SetUpUser } from '../setUpUser';
import { Observable, of } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { LoginService } from './login-service.service';
import { userList } from '../userList';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  upFriendsList: SetUpUser[] = userList;
  url: 'http://localhost:4000/subscribe';
  constructor(private http: HttpClient) { }

  save(user: SetUpUser): Observable<SetUpUser[]> {

    // this.http.post(this.url, user)
    // .subscribe(data => {console.log(data); });
    console.log(user);

    this.upFriendsList.push(new SetUpUser(user.name, user.surname, user.age, user.email, user.telephoneNumber, user.password));
    console.log(this.upFriendsList);
    return of (this.upFriendsList);
  }

}
