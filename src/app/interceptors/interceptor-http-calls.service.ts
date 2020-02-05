import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../guards/auth.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorHttpCallsService implements HttpInterceptor {


  constructor(private auth: AuthService, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable <HttpEvent<any>> {

    if (this.auth.isAuthenticated()) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + this.auth.getTokenFromLocalStorage()
        }
    });
  } else {
    this.router.navigate(['/login']);
  }
    return next.handle(request);
  }

}
