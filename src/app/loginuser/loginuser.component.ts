import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../models/loginuser.model';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {
  user: LoginUser = {
    email: '',
    password: null
  };
  constructor(private _apiService: ApiService, private _router: Router) { }

  ngOnInit() {
  }
  loginUser(): void {
      this._apiService.getRegisteredUser(this.user.email, this.user.password)
          .subscribe((userData) => this.user = userData);
  }

}
