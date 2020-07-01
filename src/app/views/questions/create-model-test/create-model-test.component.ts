import { Component, OnInit } from '@angular/core';
import {ModelTestModel} from '../../../request-model/model-test.model';
import {ModelTestService} from '../../../services/model-test.service';
import {ToastrService} from 'ngx-toastr';
import {NgForm} from '@angular/forms';
import {QuestionViewModel} from '../../../ViewModels/question.view.model';
import {QuestionRequestModel} from '../../../request-model/question.request.model';
import {QuestionOptionEnum} from '../../../enums/question-option.enum';
import {QuestionSetupViewModel} from '../../../ViewModels/question-setup.view.model';
import {SetupService} from '../../../services/setup.service';
import {QuestionService} from '../../../services/question.service';

@Component({
  selector: 'app-create-model-test',
  templateUrl: './create-model-test.component.html',
  styleUrls: ['./create-model-test.component.css']
})
export class CreateModelTestComponent implements OnInit {
  modelTest: ModelTestModel;
  searchKey: string;
  questions: QuestionViewModel[] = [];
  question: QuestionRequestModel;
  questionOptionEnum = QuestionOptionEnum;
  setupCategories: QuestionSetupViewModel[];
  setupSubjects: QuestionSetupViewModel[];
  setupChapters: QuestionSetupViewModel[];
  constructor(private service: ModelTestService,
              private setupService: SetupService,
              private toastr: ToastrService,
              private questionService: QuestionService,) {
    this.modelTest = new ModelTestModel();
    this.question = new QuestionRequestModel();
  }
  ngOnInit(): void {
    this.getSetupDatas();
  }
  getSetupDatas() {
    this.setupService.getCategoriesSetup().subscribe( (res: any) => {
      this.setupCategories = res;
    });
    this.setupService.getCaptersSetup().subscribe( (res: any) => {
      this.setupChapters = res;
    });
    this.setupService.getSubjectsSetup().subscribe( (res: any) => {
      this.setupSubjects = res;
    });
  }

  addQuestion(form) {
    if ( form.invalid || this.question.options.length < 1 || !this.validateOptions()) {
      this.toastr.warning('Please fill all the field correctly', 'Warning');
    } else {
      this.setSubjectAndChapter();
      this.questionService.saveQuestion(this.question).subscribe(res => {
        this.toastr.success('Submitted', 'Success');
        this.modelTest.questions.push(res);
        form.submitted = false;
        form.reset();
        this.question = new QuestionRequestModel();
      });
    }
  }
  validateOptions(): boolean {
    let checker = 0;
    this.question.options.forEach( item => {
      if (item.title !== undefined) {
        if (item.title.trim() !== '') {
          checker = checker + 1;
        }
      }
    });
    if ( checker < 2 ) {
      this.toastr.warning('You must fill at least two option', 'Warning');
      return false;
    }
    return true;
  }
  addCategory(category) {
    this.setupCategories.forEach( item => {
      if ( item._id === category.value) {
        this.question.categories.push(item);
      }
    });
  }
  setSubjectAndChapter() {
    this.question.subject = this.setupSubjects[this.question.subjectId];
    this.question.chapter = this.setupChapters[this.question.chapterId];
  }

  SearchKey() {
    console.log(this.searchKey);
    this.service.getQuestions(this.searchKey).subscribe( (res: any) => {
      this.questions = res;
    });
  }
  selectQuestion(index) {
    this.modelTest.questions.push(this.questions[index]);
  }
  createModelTest() {
    if (this.modelTest.name != '' && this.modelTest.categoryId != ''){
      this.modelTest.category = this.setupCategories[this.modelTest.categoryId];
      this.service.createModelTest(this.modelTest).subscribe(res => {
        this.modelTest = new ModelTestModel();
        this.questions = [];
      });
    } else {
     this.toastr.warning('Please fill name and category correctly', 'Warning');
    }

  }
}
