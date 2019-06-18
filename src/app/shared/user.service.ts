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
}
