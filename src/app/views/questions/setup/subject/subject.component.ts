import {Component, OnInit} from '@angular/core';
import {QuestionSetupRequest} from '../../../../request-model/question-setup.request.model';
import {ToastrService} from 'ngx-toastr';
import {SetupService} from '../../../../services/setup.service';

@Component({
  selector: 'app-question-setup-subject',
  templateUrl: 'subject.component.html'
})
export class SubjectComponent implements OnInit {
  subject: QuestionSetupRequest;
  dtOptions: DataTables.Settings = {};
  subjects: QuestionSetupRequest[];

  constructor(private toastr: ToastrService, private service: SetupService) {
    this.subject = new QuestionSetupRequest();
  }
  ngOnInit(): void {
    this.dtOptions = this.service.getSubjectDtOptions((res) => { this.subjects = res.data; } );
  }

  submit(form) {
    if (form.invalid) {
      this.toastr.warning('Please fill all the field correctly', 'Warning');
    } else {
      this.service.saveSubject(this.subject).subscribe(res => {
        this.toastr.success('Submitted', 'Success');
        form.submitted = false;
        form.reset();
      });
    }
  }
}

