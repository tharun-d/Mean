import { Injectable } from '@angular/core';
import { RegisterUser } from './models/registeruser.model';
import { ILoginUser, ILoggerDetails } from './models/loginuser.model';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  constructor(private _http: Http) {

  }
  public loggerDetails: ILoggerDetails = {
    firstName: null
  };
// this method executes when users login
getRegisteredUser(email: string, password: string): Observable<string> {
    return this._http.get('http://localhost:3000/api/login/' + email + '/' + password)
                .map((response: Response) => {
                {
                  return response.json();
                }
                });
}
// registers a new user
registerUser(employee: RegisterUser) {
   const headersDetails = new Headers({ 'Content-Type': 'application/json' });
   const options = new RequestOptions({ headers: headersDetails });
   console.log(employee);
   return this._http.post('http://localhost:3000/api/register', employee, options);
}
// this methods check whether the user already exists or not
emailChecker(email: string): Observable<string> {
  return this._http.get('http://localhost:3000/api/emailchecker/' + email)
              .map((response: Response) => {
                {
                  return response.json();
                }
                });

}

}


