import { Injectable } from '@angular/core';
import {Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {QuestionSetupRequest} from '../request-model/question-setup.request.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SetupService {
  busy: any;

  constructor(private httpClient: HttpClient) { }

  saveCategory(data: QuestionSetupRequest) {
    return this.httpClient.post(environment.url.serverBase + 'category' , data);
  }
}
