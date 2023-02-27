import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { LoginService } from 'app/services/login.service';
import { catchError } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;

  constructor(private authService:LoginService,private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
/*     console.log('request',request)
    const jwt:any=jwtDecode(localStorage.getItem('credentials'))
    console.log(jwt)
    const d = new Date(jwt.exp * 1000);
    console.log(d)
    console.log(Date.now() / 1000)
    console.log(new   Date(Date.now()))
 */
    console.log('request',request)
    if (request.url!=='http://localhost:8080/api/auth'){
      request=request.clone({headers:request.headers.set('Authorization',localStorage.getItem('credentials'))})

    }
    
   return next.handle(request).pipe(
      catchError((error:HttpErrorResponse)=>{
        console.log(error.message)
        console.log(error.error.msg)
        if(error.status==401){
          this.router.navigate(['login']);
        }
        return throwError(()=>error)
      })
    );
  }


}
