import {Component} from '@angular/core';
import {QuestionSetupRequest} from '../../../../request-model/question-setup.request.model';
import {ToastrService} from 'ngx-toastr';
import {SetupService} from '../../../../services/setup.service';

@Component({
  selector: 'app-question-setup-category',
  templateUrl: 'category.component.html'
})
export class CategoryComponent {
  category: QuestionSetupRequest;

  constructor(private toastr: ToastrService, private service: SetupService) {
    this.category = new QuestionSetupRequest();
  }

  submit(form) {
    if (form.invalid) {
      this.toastr.warning('Please fill all the field correctly', 'Warning');
    } else {
      this.service.saveCategory(this.category).subscribe(res => {
        this.toastr.success('Submitted', 'Success');
        form.submitted = false;
        form.reset();
      });
    }
  }
}
