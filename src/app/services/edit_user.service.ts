import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Edit_userService {

variableCompartida: any;

constructor(private http:HttpClient) {
  console.log('corriendo edit user')
}
//
getVariableCompartida() {
  return this.variableCompartida;
}

setVariableCompartida(valor: any) {
  this.variableCompartida = valor;
}

//
getLoginUser(){
  let heades = new Headers()
    .set('Type-content','aplication/json')
}

getAccessToken(body:any):Observable<any>{
  console.log('body',body)

  return this.http.put(environment.UrlAPI+'/users',body)
}
}
