import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './views/home/home.component';
import {UserComponent} from './views/user/user.component';
import {AttendanceComponent} from './views/attendance/attendance.component';
import {UserRegisterComponent} from './views/user/register/user-register.component';
import {LoginComponent} from './views/auth/login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/question/mcq/BCS',
    pathMatch: 'full'
  },
  {
    path: 'login',
    data: {
      title: ''
    },
    component: LoginComponent,
  },
  {
    path: 'user',
    data: {
      title: 'User'
    },
    component: UserComponent,
  },
  {
    path: 'attendance',
    data: {
      title: 'Attendance'
    },
    component: AttendanceComponent,
  },
  {
    path: 'user-registration',
    data: {
      title: 'Register New User'
    },
    component: UserRegisterComponent,
  },
  {
    path: 'question',
    data: {
      title: 'Question'
    },
    loadChildren: () => import('./views/questions/question.module').then(m => m.QuestionModule)
  },
  {
    path: 'preparation',
    data: {
      title: 'Preparation'
    },
    loadChildren: () => import('./views/preparation/preparation.module').then(m => m.PreparationModule)
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRouteModule {}
