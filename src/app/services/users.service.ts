import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class UsersService {

constructor(private http:HttpClient) {
  console.log('Hola 2')
}

  async getUserList():Promise<any>{
  console.log('extracted users')

  const token=localStorage.getItem('credentials');

  let heades = new HttpHeaders()
    .set('Type-content','aplication/json')

  return await this.http.get(environment.UrlAPI+'/users',{headers: heades}).toPromise()
}
//
async getUser(idusuario: string):Promise<any>{
  console.log('extracted users')

  let heades = new HttpHeaders()
    .set('Type-content','aplication/json')

    const params = new HttpParams().set('idusuario', idusuario);

  return await this.http.get(environment.UrlAPI+'/users',{headers: heades, params: params}).toPromise()
}
//
async deleteUser(idusuario: string):Promise<any>{
  console.log('borrando')

  let heades = new HttpHeaders()
    .set('Type-content','aplication/json')

  return await this.http.delete(environment.UrlAPI+'/users',{headers: heades, body: {idusuario: idusuario}}).toPromise()
}

}
