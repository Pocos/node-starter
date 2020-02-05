import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormArray, FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login-service.service';
import { SetUpUser } from '../setUpUser';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: LoginService, private fb: FormBuilder, private router: Router) {
    this.user = this.fb.group({
      email : ['', [ Validators.required, Validators.pattern('^[a-zA-Z0-9.]{1,35}[@]{1}[a-zA-Z0-9]{1,20}[.]{1}[a-z]{1,3}$')]],
      telephoneNumber : ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(10), Validators.maxLength(10)]],
      password : ['', [Validators.required, Validators.minLength(4), Validators.maxLength(16), Validators.pattern('^[0-9a-zA-Z]*$')]],
    });

  }
  upFriendsList2;
  mod = false;
  a;
  errorLogin = false;
  loginSuccess = false;
  token;
  user: FormGroup;

 ngOnInit() {
  this.service.getUsers()
  .subscribe(data => {this.upFriendsList2 = data ; console.log(this.upFriendsList2, this.upFriendsList2[2].name); });
 }

 viewLocalStorage() {
   console.log(localStorage);
 }

//  getToken() {
//   let t;
//   this.service.getToken()
//   .subscribe(data => { t = JSON.stringify(data); localStorage.setItem('token1', t); this.token = data; console.log(this.token); });
// }
 

 login(user = this.user, usersList = this.upFriendsList2) {
  this.service.login(user, usersList)
  .subscribe(data => {this.a = data;

  if (this.a !== true) {
    this.errorLogin = true;
    this.loginSuccess = false;
    } else {
    this.loginSuccess = true;
    this.errorLogin = false;
    // this.getToken();
      this.router.navigate(['/profile']);
    } });
  console.log(this.a);
  return this.a;
 }

 showPassword() {
 }

 onSubmit() {
 }
}

