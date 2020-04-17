import {OptionRequestModel} from './option.request.model';
import {QuestionSetupRequest} from './question-setup.request.model';

export class QuestionRequestModel {
  constructor() {
    this.options = [new OptionRequestModel(), new OptionRequestModel(), new OptionRequestModel(), new OptionRequestModel()];
    this.categories = [];
  }
  title: string;
  options: OptionRequestModel[];
  categories: QuestionSetupRequest[];
  categoryId: string;
  subjectId: string;
  chapterId: string;
  chapter: any;
  subject: any;
}
