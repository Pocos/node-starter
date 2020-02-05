import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import decode from 'jwt-decode';
import { LoginService } from '../services/login-service.service';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
  } )
export class RoleGuardService {

constructor(public auth: AuthService, public router: Router, private http: HttpClient) {
}

  }
