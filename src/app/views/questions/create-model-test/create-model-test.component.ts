import { Component, OnInit } from '@angular/core';
import {ModelTestModel} from '../../../request-model/model-test.model';
import {ModelTestService} from '../../../services/model-test.service';
import {ToastrService} from 'ngx-toastr';
import {NgForm} from '@angular/forms';
import {QuestionViewModel} from '../../../ViewModels/question.view.model';

@Component({
  selector: 'app-create-model-test',
  templateUrl: './create-model-test.component.html',
  styleUrls: ['./create-model-test.component.css']
})
export class CreateModelTestComponent implements OnInit {
  modelTest : ModelTestModel;
  searchKey: string;
  questions: QuestionViewModel[] = [];
  constructor(private service: ModelTestService, private toastr: ToastrService) {
    this.modelTest = new ModelTestModel();
  }


  ngOnInit() {

  }
  SearchKey() {
    console.log(this.searchKey)
    this.service.getQuestions(this.searchKey).subscribe( (res: any) => {
      this.questions = res;
    });
  }

  selectQuestion(index){
    this.modelTest.questions.push(this.questions[index]);
  }

  createModelTest() {
    this.service.createModelTest(this.modelTest).subscribe(res => {
      this.modelTest = new ModelTestModel();
      this.questions = [];
    })
  }


}
