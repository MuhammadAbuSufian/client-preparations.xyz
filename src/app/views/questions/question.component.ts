import {Component, OnInit} from '@angular/core';
import {SetupService} from '../../services/setup.service';
import {QuestionSetupViewModel} from '../../ViewModels/question-setup.view.model';
import {QuestionViewModel} from '../../ViewModels/question.view.model';
import {QuestionService} from '../../services/question.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: 'question.component.html'
})
export class QuestionComponent implements OnInit {
  setupService: SetupService;
  subjects: QuestionSetupViewModel[];
  chapters: QuestionSetupViewModel[];
  questions: QuestionViewModel[];
  questionService: QuestionService;
  page: number;
  category: string;
  constructor(setupService: SetupService, questionService: QuestionService, private  route: ActivatedRoute,) {
    this.page = 0;
    this.setupService = setupService;
    this.questionService = questionService;
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.category = params['category'];
      }
    );
    this.getSujects(this.category);
    this.getQuestions();
  }

  getSujects(category: string): void {
    this.setupService.getSubjectsSetupByCategory(category).subscribe( (res: QuestionSetupViewModel[] ) => {
      this.subjects = res;
    });
  }

  getQuestions(): void {
    this.questionService.getQuestions(this.page).subscribe( (res: QuestionViewModel[]) => {
      this.questions = res;
      if ( res.length === 30) {
        this.page++;
      }
    });
  }

  loadMore(): void {
    if ( this.page !== 0 ) {
      this.questionService.getQuestions(this.page).subscribe( (res: QuestionViewModel[]) => {
        res.forEach( (item) => {
          this.questions.push(item);
        });
        if ( res.length === 30) {
          this.page++;
        } else {
          this.page = 0;
        }
      });
    }
  }
}
