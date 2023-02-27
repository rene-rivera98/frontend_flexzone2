import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class newUserService {

  constructor(private http:HttpClient) {
    console.log('Crear usuarios ejecutandose')
  }

  postEditUser(body2:any):Observable<any>{
    const token=localStorage.getItem('credentials');

    let heades = new HttpHeaders()
      .set('Type-content','aplication/json')
      return this.http.post(environment.UrlAPI+'/users',body2,{headers: heades})
  }

  postNewUser(body2:any):Observable<any>{
    const token=localStorage.getItem('credentials');

    let heades = new HttpHeaders()
      .set('Type-content','aplication/json')
      return this.http.post(environment.UrlAPI+'/users',body2,{headers: heades})
  }
}

