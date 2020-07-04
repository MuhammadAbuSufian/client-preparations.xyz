import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestRoomComponent } from './test-room.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: ':modelTestId',
    component: TestRoomComponent,
    data: {
      title: 'Test Room'
    },
  }
];


@NgModule({
  declarations: [TestRoomComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class TestRoomModule { }

