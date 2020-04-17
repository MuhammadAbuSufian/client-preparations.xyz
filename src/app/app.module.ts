import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRouteModule} from './app.route';
import {HomeComponent} from './views/home/home.component';
import {UserComponent} from './views/user/user.component';
import {HttpClientModule} from '@angular/common/http';
import { AttendanceComponent } from './views/attendance/attendance.component';
import {NgBusyModule} from 'ng-busy';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserRegisterComponent} from './views/user/register/user-register.component';
import {FooterComponent} from './views/widgets/footer/footer.component';
import {HeaderComponent} from './views/widgets/header/header.component';
import {FormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './views/user/user-list/user-list.component';
import {AddUserComponent} from './views/user/add-user/add-user.component';
import {DataTablesModule} from 'angular-datatables';
import {LoginComponent} from './views/auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    AttendanceComponent,
    UserRegisterComponent,
    FooterComponent,
    HeaderComponent,
    UserListComponent,
    AddUserComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRouteModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgBusyModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
