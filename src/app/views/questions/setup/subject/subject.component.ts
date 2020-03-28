import {Component, OnInit, ViewChild} from '@angular/core';
import {QuestionSetupRequest} from '../../../../request-model/question-setup.request.model';
import {ToastrService} from 'ngx-toastr';
import {SetupService} from '../../../../services/setup.service';
import {DataTableDirective} from 'angular-datatables';

@Component({
  selector: 'app-question-setup-subject',
  templateUrl: 'subject.component.html'
})
export class SubjectComponent implements OnInit {
  subject: QuestionSetupRequest;
  dtOptions: DataTables.Settings = {};
  subjects: QuestionSetupRequest[];
  // @ts-ignore
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
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
        this.rerender();
      });
    }
  }

  rerender(): void  {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.ajax.reload();
    });
  }
}

