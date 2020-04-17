import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {QuestionRequestModel} from '../request-model/question.request.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  admin = false;
  constructor() { }



}
