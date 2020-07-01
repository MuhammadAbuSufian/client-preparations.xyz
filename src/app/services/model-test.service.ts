import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ModelTestModel} from '../request-model/model-test.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModelTestService {

  constructor( private httpClient: HttpClient) { }


  getQuestions(searchKey) {
    return this.httpClient.get(environment.url.serverBase + 'question/search/' + searchKey);
  }

  createModelTest(data) {
    return this.httpClient.post(environment.url.serverBase + 'modelTest', data);
  }

  getModelTest(category) {
    return this.httpClient.get(environment.url.serverBase + 'modelTest/' + category);
  }

  getModelTestByName(name) {
    return this.httpClient.get(environment.url.serverBase + 'modelTest/byname/' + name);
  }
}
