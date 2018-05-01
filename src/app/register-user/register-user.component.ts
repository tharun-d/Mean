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
    this._apiService.saveUser(this.user);
    this._router.navigate(['login']);
  }

}
