import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { ILoginUser } from '../models/loginuser.model';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})

@Injectable()
export class LoginuserComponent implements OnInit {
  user: ILoginUser = {
    email: '',
    password: null
  };
  STORAGE_KEY = 'looger Email';
  status: string;
  Message = '';
  constructor(@Inject(SESSION_STORAGE) private storage: StorageService, private _apiService: ApiService, private _router: Router) { }

  ngOnInit() {
  }
  loginUser(): void {

      this._apiService.getRegisteredUser(this.user.email, this.user.password)
          .subscribe((res) => {
            this.status = res;
            if (this.status === 'Not Found') {
              this.Message = 'sorry we cant find you :( either give correct login details or register';
            } else {
              this.storage.set(this.STORAGE_KEY, this.status);
              console.log(this.storage.get(this.STORAGE_KEY));
              this._router.navigate(['addMovie']);
            }
          });
  }

}
