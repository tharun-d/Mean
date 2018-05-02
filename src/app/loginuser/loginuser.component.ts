import { Component, OnInit } from '@angular/core';
import { ILoginUser } from '../models/loginuser.model';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {
  user: ILoginUser = {
    email: '',
    password: null
  };
  status: string;
  Message = '';
  constructor(private _apiService: ApiService, private _router: Router) { }

  ngOnInit() {
  }
  loginUser(): void {

      this._apiService.getRegisteredUser(this.user.email, this.user.password)
          .subscribe((res) => {
            this.status = res;
            if (this.status === 'Not Found') {
              this.Message = 'sorry we cant find you :( either give correct login details or register';
            } else {
              // JSON.stringify(this._apiService.loggerDetails = res;
              this._router.navigate(['blog']);
            }
          });
  }

}
