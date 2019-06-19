import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http,Response } from "@angular/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.model';


@Injectable()
export class UserService {
  readonly rootUrl = "https://chennai-shoppers.herokuapp.com"
  constructor(private http : HttpClient) { }

  registerUser(user : User){
    const body : User = {
      email: user.email,
      password: user.password
    };
    var reqHeader = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.rootUrl + '/users/signup', body,{headers : reqHeader});
  }

  userAuthentication(email, password) {

    const body : User = {
      email: email,
      password: password
    };
    var reqHeader = new HttpHeaders({ 'Content-Type':'application/json', 'No-Auth':'True' });
    return this.http.post(this.rootUrl + '/users/login', body, { headers: reqHeader });
  }

  loggedIn() {
    //check here if the user is logged by your usual way
    // and return true if logged or false, if not
    //something like
     return localStorage.getData('token');
     // && tokenNotExpired('id_token');

  }

  getUserClaims(){
   return  this.http.get(this.rootUrl+'/products', {headers : new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')})});
  }
}
