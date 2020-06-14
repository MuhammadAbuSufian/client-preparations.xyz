import {Routes} from '@angular/router';
import {PreparationComponent} from './preparation.component';

export const preparationRoute: Routes = [
  {
    path: '',
    component: PreparationComponent,
    data: {
      title: 'Preparation'
    },
  }
];
