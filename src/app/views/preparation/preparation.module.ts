import {NgModule} from '@angular/core';
import {PreparationComponent} from './preparation.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {preparationRoute} from './preparation.route';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(preparationRoute),
  ],
  declarations: [PreparationComponent],
  providers: []
})
export class PreparationModule {

}
