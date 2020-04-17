import {Component, OnInit} from '@angular/core';
import {SetupService} from '../../../services/setup.service';
import {QuestionSetupViewModel} from '../../../ViewModels/question-setup.view.model';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit{
  categories: QuestionSetupViewModel[];
  constructor(private setupService: SetupService) {
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
}
