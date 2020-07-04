import { Component, OnInit } from '@angular/core';
import {ModelTestService} from '../../services/model-test.service';
import {ActivatedRoute, Params} from '@angular/router';
import {CommonDataService} from '../../services/common-data.service';
import {ModelTestModel} from '../../request-model/model-test.model';
import Swal from 'sweetalert2';
import {QuestionOptionEnum} from '../../enums/question-option.enum';
import { Location } from '@angular/common';
@Component({
  selector: 'app-test-room',
  templateUrl: './test-room.component.html',
  styleUrls: ['./test-room.component.css']
})
export class TestRoomComponent implements OnInit {
  name: string;
  modelTest: ModelTestModel;
  testQuestions = [];
  service: ModelTestService;
  questionOptionEnum = QuestionOptionEnum;
  constructor(private mservice: ModelTestService,
              private  route: ActivatedRoute,
              private commonData: CommonDataService,
              private location: Location) {
    this.modelTest = new ModelTestModel();
    this.service = mservice;
  }
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.commonData.title = params['modelTestId'];
        this.getModelTest();
      }
    );
  }

  getModelTest() {
    this.service.getModelTestByName(this.commonData.title).subscribe((res: any) => {
      this.modelTest.questions = res.questions;
      this.testQuestions = JSON.parse(JSON.stringify(res.questions));
      this.testQuestions.forEach(question => {
        for ( let i = 0; i < question.options.length; i++) {
          question.options[i].answer = false;
        }
      });
      console.log(this.modelTest);
    });
  }

  selectOption(questionIndex, optionIndex){
    this.testQuestions[questionIndex].options.forEach((option, index)=>{
      if(optionIndex != index) {
        this.testQuestions[questionIndex].options[index].answer = false;
      }
    });
  }

  calculateResult() {
    let countCorrect = 0;
    this.testQuestions.forEach((tQuestion, questionIndex) => {
      tQuestion.options.forEach((tOption, optionIndex) => {
        if (tOption.answer == true) {
          if (this.modelTest.questions[questionIndex].options[optionIndex].answer == true){
            countCorrect++;
          }
        }
      });
    });
    Swal.fire(
      'Test Completed',
      `You have corrected ${countCorrect} out of ${this.testQuestions.length}`,
      'success'
    );
    this.location.back();
  }

}
