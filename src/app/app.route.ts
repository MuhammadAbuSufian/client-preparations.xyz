import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './views/home/home.component';
import {UserComponent} from './views/user/user.component';
import {AttendanceComponent} from './views/attendance/attendance.component';
import {UserRegisterComponent} from './views/user/register/user-register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    data: {
      title: 'Home'
    },
    component: HomeComponent,
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
    path: '**',
    redirectTo: '/home',
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouteModule {}
