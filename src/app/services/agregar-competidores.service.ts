import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AgregarCompetidoresService {

  public url: String;


  constructor(public _http: HttpClient) {
    
    this.url = "http://localhost:8080/"
   }

  addUser(user)
  {
    let json = JSON.stringify(user);
    let headers = new HttpHeaders().set('content-Type','application/json');
    
    return this._http.post(this.url+'competitors/add',json, {headers});
  }

  getUser()
  {
    return this._http.get(this.url+'competitors/get');
  }

  iniciaUser(user){
    let json = JSON.stringify(user);
    let headers = new HttpHeaders().set('content-Type','application/json');
    
    return this._http.post(this.url+'competitors/iniciar',json, {headers});

  }

  
  
}
