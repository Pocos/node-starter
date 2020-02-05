import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
  } )

export class AuthService {

constructor() {
 }

 getTokenFromLocalStorage() {
   let token = localStorage.getItem('token');
   return token;
 }

  public isAuthenticated( ): boolean {
  let token = this.getTokenFromLocalStorage();
  if (token) {
    console.log('authenticate true');
    return true;
  } else {
    console.log('authenticate false');
    return false;
  }
}
}

