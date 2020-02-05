import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
    })
export class AuthGuardService implements CanActivate {

constructor(public auth: AuthService, public router: Router) {}

canActivate(): boolean {

    if (this.auth.isAuthenticated( ) === true) {
        console.log('canActivate()true');
        return true;
    } else {
        this.router.navigate(['/login']);
        console.log('canActivate()false');
        return false;
      }
    }
}
