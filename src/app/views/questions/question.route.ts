import {Routes} from '@angular/router';
import {AddQuestionComponent} from './add-question/add-question.component';
import {SetupComponent} from './setup/setup.component';
import {QuestionComponent} from './question.component';
import {AdminGuard} from '../../services/auth.gaurd';

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
    path: 'question-setups',
    component: SetupComponent,
    data: {
      title: 'Question Setups'
    },
    canActivate: [AdminGuard],
  }
]
