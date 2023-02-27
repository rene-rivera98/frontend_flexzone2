import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

constructor(private http:HttpClient) {
  console.log('ejecutando getProductos')
 }

 async getProductsList():Promise<any>{
  console.log('extracted products')

  const token=localStorage.getItem('credentials');

  let heades = new HttpHeaders()
    .set('Type-content','aplication/json')

  return await this.http.get(environment.UrlAPI+'/products',{headers: heades}).toPromise();
}
}
