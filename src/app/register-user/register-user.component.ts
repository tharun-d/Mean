import { Component, OnInit } from '@angular/core';
import { RegisterUser } from '../models/registeruser.model';
import { ApiService } from '../api.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  user: RegisterUser = {
    firstName: null,
    lastName: null,
    gender: null,
    contactPreference: null,
    email: '',
    phoneNumber: null,
    dateOfBirth: null,
    password: null,
    };
    confirmPasswordVerify: null;
    Message = '';
    status: string;
    datePickerConfig: Partial<BsDatepickerConfig>; // change theme
    constructor(private _apiService: ApiService, private _router: Router) {
      this.datePickerConfig = Object.assign({},
        {
          containerClass: 'theme-dark-blue',
          showWeekNumbers: false
        }
      );
     }

  ngOnInit() {
  }
  saveUser(): void {
    this._apiService.emailChecker(this.user.email).subscribe((res) => {
      this.status = res;
      if (this.status === 'Found') {
        this.Message = 'User with similar email already exists';
      } else {
        this._apiService.registerUser(this.user).subscribe();
        this._router.navigate(['login']);
      }
    });
  }

}
