import {Routes} from '@angular/router';
import {PreparationComponent} from './preparation.component';

export const preparationRoute: Routes = [
  {
    path: 'questionBank',
    component: PreparationComponent,
    data: {
      title: 'Preparation'
    },
  }
];
