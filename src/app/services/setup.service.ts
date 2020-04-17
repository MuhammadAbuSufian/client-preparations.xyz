import { Injectable } from '@angular/core';
import {Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {QuestionSetupRequest} from '../request-model/question-setup.request.model';
import {environment} from '../../environments/environment';
import {DataTableViewModel} from '../ViewModels/data-table.view.model';

@Injectable({
  providedIn: 'root'
})
export class SetupService {
  busy: any;
  constructor(private httpClient: HttpClient) { }

  saveCategory(data: QuestionSetupRequest) {
    return this.httpClient.post(environment.url.serverBase + 'category' , data);
  }
  saveChapter(data: QuestionSetupRequest) {
    return this.httpClient.post(environment.url.serverBase + 'chapter' , data);
  }
  saveSubject(data: QuestionSetupRequest) {
    return this.httpClient.post(environment.url.serverBase + 'subject' , data);
  }

  getCategoryDtOptions(callBackFunc): DataTables.Settings {
    const url = 'category/data-grid';
    const options: DataTables.Settings = {
      autoWidth: false,
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        this.httpClient
        .post<DataTableViewModel>(
          environment.url.serverBase + url,
          dataTablesParameters, {}
        ).subscribe(resp => {
          callBackFunc(resp);
          callback({
            recordsTotal: resp.recordsTotal,
            recordsFiltered: resp.recordsFiltered,
            data: []
          });
        });
      },
      columns: [{ data: 'id' }, { data: 'title' }, { data: 'description' }]
    };
    return options;
  }

  getSubjectDtOptions(callBackFunc): DataTables.Settings {
    const url = 'subject/data-grid';
    const options: DataTables.Settings = {
      autoWidth: false,
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        this.httpClient
          .post<DataTableViewModel>(
            environment.url.serverBase + url,
            dataTablesParameters, {}
          ).subscribe(resp => {
          callBackFunc(resp);
          callback({
            recordsTotal: resp.recordsTotal,
            recordsFiltered: resp.recordsFiltered,
            data: []
          });
        });
      },
      columns: [{ data: 'id' }, { data: 'title' }, { data: 'description' }]
    };
    return options;
  }

  getChapterDtOptions(callBackFunc): DataTables.Settings {
    const url = 'chapter/data-grid';
    const options: DataTables.Settings = {
      autoWidth: false,
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        this.httpClient
          .post<DataTableViewModel>(
            environment.url.serverBase + url,
            dataTablesParameters, {}
          ).subscribe(resp => {
          callBackFunc(resp);
          callback({
            recordsTotal: resp.recordsTotal,
            recordsFiltered: resp.recordsFiltered,
            data: []
          });
        });
      },
      columns: [{ data: 'id' }, { data: 'title' }, { data: 'description' }]
    };
    return options;
  }

  getCategoriesSetup() {
    return this.httpClient.get(environment.url.serverBase + 'category/data-setup' );
  }
  getCaptersSetup() {
    return this.httpClient.get(environment.url.serverBase + 'chapter/data-setup' );
  }
  getSubjectsSetup() {
    return this.httpClient.get(environment.url.serverBase + 'subject/data-setup' );
  }
  getSubjectsSetupByCategory(category: string) {
    return this.httpClient.get(environment.url.serverBase + 'subject/' + category );
  }

}
