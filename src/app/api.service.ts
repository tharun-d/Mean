import { Injectable } from '@angular/core';
import { RegisterUser } from './models/registeruser.model';
import { LoginUser } from './models/loginuser.model';

@Injectable()
export class ApiService {
  public loggedUser: LoginUser;
  public userName: string;

getRegisteredUser(email: string): LoginUser {
    return this.loggedUser;
}
saveUser(employee: RegisterUser) {
  // this.listEmployees.push(employee);
}


}
