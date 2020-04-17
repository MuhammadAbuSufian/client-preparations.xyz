import {Component, OnInit} from '@angular/core';
import {SetupService} from '../../../services/setup.service';
import {QuestionSetupViewModel} from '../../../ViewModels/question-setup.view.model';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {
  categories: QuestionSetupViewModel[];
  constructor(private setupService: SetupService, private router: Router,
              private toastr: ToastrService, public authService: AuthService) {
    this.categories = [];

  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.setupService.getCategoriesSetup().subscribe( ( res: QuestionSetupViewModel[]) => {
      this.categories = res;
    });
  }
  logout(){
    localStorage.clear();
    this.toastr.success('Successfully LogedOut', 'Success');
    this.router.navigate(['/login']);
    this.authService.admin = false;
  }
}
