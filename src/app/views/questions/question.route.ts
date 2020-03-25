import {Routes} from '@angular/router';
import {AddQuestionComponent} from './add-question/add-question.component';
import {SetupComponent} from './setup/setup.component';

export const questionRoutes: Routes = [
  {
    path: 'add-question',
    component: AddQuestionComponent,
    data: {
      title: 'Add Question'
    },
  },
  {
    path: 'question-setups',
    component: SetupComponent,
    data: {
      title: 'Question Setups'
    },
  }
]
