import {Routes} from '@angular/router';
import {AddQuestionComponent} from './add-question/add-question.component';
import {SetupComponent} from './setup/setup.component';
import {QuestionComponent} from './question.component';
import {AdminGuard} from '../../services/auth.gaurd';
import {CreateModelTestComponent} from './create-model-test/create-model-test.component';
import {QuestionsComponent} from './questions/questions.component';

export const questionRoutes: Routes = [
  {
    path: 'mcq/:category',
    component: QuestionComponent,
    data: {
      title: 'MCQ Questions'
    },
  },
  {
    path: 'add-question',
    component: AddQuestionComponent,
    data: {
      title: 'Add Question'
    },
    canActivate: [AdminGuard],
  },
  {
    path: 'questions',
    component: QuestionComponent,
    data: {
      title: 'Questions'
    },
    canActivate: [AdminGuard],
  },
  {
    path: 'question-setups',
    component: SetupComponent,
    data: {
      title: 'Question Setups'
    },
    canActivate: [AdminGuard],
  },
  {
    path: 'create-model-test',
    component: CreateModelTestComponent,
    data: {
      title: 'Create Model Test'
    },
    canActivate: [AdminGuard],
  },
  {
    path: 'bulbul',
    component: QuestionsComponent,
    canActivate: [AdminGuard],
  }
]
