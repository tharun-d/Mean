import { Injectable } from '@angular/core';
import { RegisterUser } from './models/registeruser.model';
import { LoginUser } from './models/loginuser.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  public loggedUser: LoginUser;
  public userName: string;
  constructor(private _http: Http) {

  }

getRegisteredUser(email: string, password: string): Observable<LoginUser> {
    return this._http.get('http://localhost:3000/api/login/' + email + '/' + password)
                .map((response: Response) => <LoginUser>response.json());
}
saveUser(employee: RegisterUser) {
  // this.listEmployees.push(employee);
}


}
