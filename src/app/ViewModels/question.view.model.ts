import {QuestionSetupViewModel} from './question-setup.view.model';
import {OptionViewModel} from './option.view.model';

export class QuestionViewModel {
  id: string;
  title: string;
  description: string;
  subjectId: string;
  chapterId: string;
  options: OptionViewModel [];
}
