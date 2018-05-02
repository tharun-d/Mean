import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { BlogComponent } from './blog/blog.component';
import { ApiService } from './api.service';
import { ConfirmEqualValidatorDirective } from './register-user/confirm-equal-validator.direcive';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
  {path: 'register', component: RegisterUserComponent},
  {path: 'login', component: LoginuserComponent},
  {path: 'blog', component: BlogComponent},
  {path: '', redirectTo: '/register', pathMatch: 'full'}
  ];

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    LoginuserComponent,
    BlogComponent,
    ConfirmEqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
