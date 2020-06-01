import {Component, OnInit} from '@angular/core';
import {QuestionSetupViewModel} from '../../../ViewModels/question-setup.view.model';
import {SetupService} from '../../../services/setup.service';
import {QuestionRequestModel} from '../../../request-model/question.request.model';
import {QuestionService} from '../../../services/question.service';
import {ToastrService} from 'ngx-toastr';
import {OptionRequestModel} from '../../../request-model/option.request.model';
import {QuestionOptionEnum} from '../../../enums/question-option.enum';

@Component({
  selector: 'app-add-question',
  templateUrl: 'add-question.component.html'
})
export class AddQuestionComponent implements OnInit {
  setupCategories: QuestionSetupViewModel[];
  setupSubjects: QuestionSetupViewModel[];
  setupChapters: QuestionSetupViewModel[];
  question: QuestionRequestModel;
  questionOptionEnum = QuestionOptionEnum;
  constructor(private setupService: SetupService, private service: QuestionService, private toastr: ToastrService) {
    this.question = new QuestionRequestModel();
  }

  ngOnInit(): void {
    this.getSetupDatas();
  }

  submit(form) {
    if ( form.invalid || this.question.options.length < 1 || !this.validateOptions()) {
      this.toastr.warning('Please fill all the field correctly', 'Warning');
    } else {
      this.setSubjectAndChapter();
      this.service.saveQuestion(this.question).subscribe(res => {
        this.toastr.success('Submitted', 'Success');
        form.submitted = false;
        form.reset();
        this.question = new QuestionRequestModel();
      });
    }
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
  addCategory(category) {
    this.setupCategories.forEach( item => {
      if ( item._id === category.value) {
        this.question.categories.push(item);
      }
    });
  }
  delCategory(index) {
    this.question.categories.splice(index, 1);
  }
  addOption() {
    if (this.question.options.length < 7) {
      this.question.options.push(new OptionRequestModel());
    } else {
      this.toastr.warning('You can not add more than seven option', 'Warning');
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
  setSubjectAndChapter() {
    this.question.subject = this.setupSubjects[this.question.subjectId];
    this.question.chapter = this.setupChapters[this.question.chapterId];
  }
}
