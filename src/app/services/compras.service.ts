import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

constructor(private http:HttpClient) {
  console.log('Compras ejecutandose')
}

  postCompras(compras:any):Observable<any>{
    const token=localStorage.getItem('credentials');

    let heades = new HttpHeaders()
      .set('Type-content','aplication/json')
      .set('Authorization', `Bearer ${token}`);
      return this.http.post(environment.UrlAPI+'/compras',compras,{headers: heades})
  }
}
