import { Injectable } from '@angular/core';
import { RegisterUser } from './models/registeruser.model';
import { ILoginUser } from './models/loginuser.model';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Imovies } from './models/movies.model';

@Injectable()
export class ApiService {
  constructor(private _http: Http) {

  }
 email = '';
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
registerUser(user: RegisterUser) {
   const headersDetails = new Headers({ 'Content-Type': 'application/json' });
   const options = new RequestOptions({ headers: headersDetails });
   return this._http.post('http://localhost:3000/api/register', user, options);
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
// getting all movies in moviescollection
getAllMovies(): Observable<Imovies[]> {
    return this._http.get('http://localhost:3000/api/movies')
              .map((response: Response) => <Imovies[]>(response.json()));

}

registerMovie(movie: Imovies) {
  const headersDetails = new Headers({ 'Content-Type': 'application/json' });
  const options = new RequestOptions({ headers: headersDetails });
  return this._http.post('http://localhost:3000/api/movies', movie, options);
}

}


