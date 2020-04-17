import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../../../services/auth.service';

export class LoginModel {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  user: LoginModel;
  constructor(      public router: Router,
                    private toastr: ToastrService, private authService: AuthService) {
    this.user = new LoginModel();
  }
  login() {
    if (this.user.username.trim() === 'Admin' && this.user.password.trim() === 'Admin@2020') {
      const userSession = 'eyJ0b2tlbnMiOltdLCJfaWQiOiI1ZTk3M2VkNmIyNTFiNzNjNDRkMzkwMzUiLCJlbWFpbCI6InNheUBnbWFpbC5jb20iLCJwYXNzd29yZCI6bnVsbCwibGFzdE5hbWUiOiJzYXlrYXQiLCJnZW5kZXIiOm51bGwsInJvbGUiOnsiX2lkIjoiNWU5NmMzMWRlZmYyYzUwYjk4NTM0NzQ0IiwibmFtZSI6Ikp1bmlvciBBZG1pbiIsImNyZWF0ZWRBdCI6IjIwMjAtMDQtMTVUMDg6MTc6MzMuNDAxWiIsInVwZGF0ZWRBdCI6IjIwMjAtMDQtMTVUMDg6MTc6MzMuNDAxWiIsIl9fdiI6MH0sImNyZWF0ZWRBdCI6IjIwMjAtMDQtMTVUMTc6MDU6MjYuOTA4WiIsInVwZGF0ZWRBdCI6IjIwMjAtMDQtMTVUMTc6MDU6MjYuOTA4WiIsIl9fdiI6MCwiaWF0IjoxNTg3MDE1NTE2LCJleHAiOjE1ODc2MjAzMTZ9';
      localStorage.setItem('userToken', userSession);
      this.toastr.success('Successfully LogedIn', 'Success');
      this.authService.admin = true;
      this.router.navigate(['/question/add-question']);
    }
  }
}
