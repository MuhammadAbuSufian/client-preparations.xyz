
import {OptionViewModel} from './option.view.model';

export class QuestionViewModel {
  _id: string;
  title: string;
  description: string;
  subjectId: string;
  chapterId: string;
  options: OptionViewModel [];
}
