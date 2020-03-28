import {Component, OnInit, ViewChild} from '@angular/core';
import {QuestionSetupRequest} from '../../../../request-model/question-setup.request.model';
import {ToastrService} from 'ngx-toastr';
import {SetupService} from '../../../../services/setup.service';
import {HttpClient} from '@angular/common/http';
import {DataTableDirective} from 'angular-datatables';


@Component({
  selector: 'app-question-setup-category',
  templateUrl: 'category.component.html'
})
export class CategoryComponent implements OnInit {
  category: QuestionSetupRequest;
  dtOptions: DataTables.Settings = {};
  categories: QuestionSetupRequest[];

  // @ts-ignore
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  constructor(private toastr: ToastrService, private service: SetupService) {
    this.category = new QuestionSetupRequest();
  }
  ngOnInit(): void {
    this.setTable();
  }
  setTable() {
    this.dtOptions = this.service.getCategoryDtOptions((res) => { this.categories = res.data; } );
  }
  submit(form) {
    if (form.invalid) {
      this.toastr.warning('Please fill all the field correctly', 'Warning');
    } else {
      this.service.saveCategory(this.category).subscribe(res => {
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
