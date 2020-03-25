import {OptionRequestModel} from './option.request.model';

export class QuestionRequestModel {
  constructor() {
    this.options = [];
  }
  title: string;
  options: OptionRequestModel[];
  categoryId: string;
  subjectId: string;
  chapterId: string;
}
