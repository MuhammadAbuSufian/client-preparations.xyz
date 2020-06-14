import {Component, OnInit} from '@angular/core';
import {SetupService} from '../../services/setup.service';
import set = Reflect.set;
import {QuestionSetupViewModel} from '../../ViewModels/question-setup.view.model';
import {QuestionViewModel} from '../../ViewModels/question.view.model';
import {QuestionService} from '../../services/question.service';
import {ActivatedRoute, Params} from '@angular/router';
import {CommonDataService} from '../../services/common-data.service';
import {ModelTestService} from '../../services/model-test.service';

@Component({
  selector: 'app-preparation',
  templateUrl: 'preparation.component.html'
})
export class PreparationComponent implements OnInit {
  setupService: SetupService;
  subjects: QuestionSetupViewModel[];
  chapters: QuestionSetupViewModel[];
  questions: QuestionViewModel[];
  questionService: QuestionService;
  page: number;
  category: string;
  chapter: string;
  subject: string;
  subjectName: string;
  chapterName: string;
  modeltests = [];
  constructor(setupService: SetupService,
              questionService: QuestionService,
              private  route: ActivatedRoute,
              private commonData: CommonDataService,
              private modelTestService: ModelTestService
              ) {
    this.page = 0;
    this.chapter = 'default';
    this.subject = 'default';
    this.chapterName = 'All';
    this.subjectName = 'All';
    this.setupService = setupService;
    this.questionService = questionService;
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.commonData.title = params['category'];
        this.category = params['category'];
        this.getQuestions(this.commonData.title, this.subject);
        this.getModelTest();
      }
    );
    this.getSujects(this.category);
    this.getChapters();
  }
  getModelTest() {
    this.modelTestService.getModelTest(this.commonData.title).subscribe((res: any) => {
      this.modeltests = res;
    });
  }
  getSujects(category: string): void {
    this.setupService.getSubjectsSetup().subscribe((res: QuestionSetupViewModel[]) => {
      this.subjects = res;
    });
  }

  getQuestions(currentCategory, subject): void {
    this.page = 0;
    this.subject = subject;
    this.setHeader();
    this.questionService.getQuestions(this.page, currentCategory, this.chapter, subject).subscribe((res: QuestionViewModel[]) => {
      this.questions = res;
      if (res.length === 30) {
        this.page++;
      }
    });
  }

  getChapters() {
    this.setupService.getCaptersSetup().subscribe((res: any) => {
      this.chapters = res;
    });
  }

  loadMore(): void {
    if (this.page !== 0) {
      this.questionService.getQuestions(this.page, this.category, this.chapter, this.subject).subscribe((res: QuestionViewModel[]) => {
        res.forEach((item) => {
          this.questions.push(item);
        });
        if (res.length === 30) {
          this.page++;
        } else {
          this.page = 0;
        }
      });
    }
  }

  setHeader() {
    if (this.subject === 'default') {
      this.subjectName = 'All';
    } else {
      this.subjects.forEach(item => {
        if (item.id === this.subject) {
          this.subjectName = item.title;
        }
      });
    }
    if (this.chapter === 'default') {
      this.chapterName = 'All';
    } else {
      this.chapters.forEach(item => {
        if (item.id === this.chapter) {
          this.chapterName = item.title;
        }
      });
    }
  }

  changeSubject(category, subject) {
    this.chapter = 'default';
    this.getQuestions(category, subject);
  }
}
