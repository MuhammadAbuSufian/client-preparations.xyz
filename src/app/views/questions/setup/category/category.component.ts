import {Component, OnInit} from '@angular/core';
import {QuestionSetupRequest} from '../../../../request-model/question-setup.request.model';
import {ToastrService} from 'ngx-toastr';
import {SetupService} from '../../../../services/setup.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';

class Person {
  id: number;
  firstName: string;
  lastName: string;
}

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-question-setup-category',
  templateUrl: 'category.component.html'
})
export class CategoryComponent implements OnInit {
  category: QuestionSetupRequest;
  dtOptions: DataTables.Settings = {};
  persons: Person[];

  constructor(private toastr: ToastrService, private service: SetupService, private http: HttpClient) {
    this.category = new QuestionSetupRequest();
  }
  ngOnInit(): void {
    const that = this;

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        that.http
          .post<DataTablesResponse>(
            environment.url.serverBase + 'category/data-grid',
            dataTablesParameters, {}
          ).subscribe(resp => {
          that.persons = resp.data;

          callback({
            recordsTotal: resp.recordsTotal,
            recordsFiltered: resp.recordsFiltered,
            data: []
          });
        });
      },
      columns: [{ data: 'id' }, { data: 'firstName' }, { data: 'lastName' }]
    };
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
