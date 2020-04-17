import {NgModule} from '@angular/core';
import {AddQuestionComponent} from './add-question/add-question.component';
import {QuestionsComponent} from './questions/questions.component';
import {RouterModule} from '@angular/router';
import {questionRoutes} from './question.route';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SetupComponent} from './setup/setup.component';
import {SubjectComponent} from './setup/subject/subject.component';
import {ChapterComponent} from './setup/chapter/chapter.component';
import {CategoryComponent} from './setup/category/category.component';
import {DataTablesModule} from 'angular-datatables';
import {SetupService} from '../../services/setup.service';
import {QuestionComponent} from './question.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(questionRoutes),
    DataTablesModule,
  ],

  declarations: [
    QuestionComponent,
    AddQuestionComponent,
    QuestionsComponent,
    SetupComponent,
    SubjectComponent,
    ChapterComponent,
    CategoryComponent
  ],
  providers: [SetupService]
})
export class QuestionModule {

}
