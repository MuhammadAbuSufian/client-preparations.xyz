import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {QuestionRequestModel} from '../request-model/question.request.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpClient: HttpClient) { }

  saveQuestion(data: QuestionRequestModel) {
    return this.httpClient.post(environment.url.serverBase + 'question' , data);
  }

  getQuestions(page: number, currentCategory: string, chapter: string, subject: string) {
    return this.httpClient.get(environment.url.serverBase + 'question' + '/' + page +
      '/' + currentCategory + '/' + chapter + '/' + subject);
  }

}
