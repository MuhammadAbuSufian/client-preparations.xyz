import {Component, OnInit} from '@angular/core';
import {SetupService} from '../../services/setup.service';
import set = Reflect.set;
import {QuestionSetupViewModel} from '../../ViewModels/question-setup.view.model';
import {QuestionViewModel} from '../../ViewModels/question.view.model';
import {QuestionService} from '../../services/question.service';

@Component({
  selector: 'app-preparation',
  templateUrl: 'preparation.component.html'
})
export class PreparationComponent implements OnInit{
  setupService: SetupService;
  subjects: QuestionSetupViewModel[];
  chapters: QuestionSetupViewModel[];
  questions: QuestionViewModel[];
  questionService: QuestionService;
  page: number;
  constructor(setupService: SetupService, questionService: QuestionService) {
    this.page = 0;
    this.setupService = setupService;
    this.questionService = questionService;
  }

  ngOnInit(): void {
    this.getSujects();
    this.getQuestions();
  }

  getSujects(): void {
    this.setupService.getSubjectsSetup().subscribe( (res: QuestionSetupViewModel[] ) => {
      this.subjects = res;
    });
  }

  getQuestions(): void {
    // this.questionService.getQuestions(this.page).subscribe( (res: QuestionViewModel[]) => {
    //   this.questions = res;
    //   if ( res.length === 30) {
    //     this.page++;
    //   }
    // });
  }

  loadMore(): void {
    // if ( this.page !== 0 ) {
    //   this.questionService.getQuestions(this.page).subscribe( (res: QuestionViewModel[]) => {
    //     res.forEach( (item) => {
    //       this.questions.push(item);
    //     });
    //     if ( res.length === 30) {
    //       this.page++;
    //     } else {
    //       this.page = 0;
    //     }
    //   });
    // }
  }
}
