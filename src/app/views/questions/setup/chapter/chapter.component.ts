import {Component, OnInit} from '@angular/core';
import {QuestionSetupRequest} from '../../../../request-model/question-setup.request.model';
import {ToastrService} from 'ngx-toastr';
import {SetupService} from '../../../../services/setup.service';

@Component({
  selector: 'app-question-setup-chapter',
  templateUrl: 'chapter.component.html'
})
export class ChapterComponent implements OnInit{
  chapter: QuestionSetupRequest;
  dtOptions: DataTables.Settings = {};
  chapters: QuestionSetupRequest[];
  constructor(private toastr: ToastrService, private service: SetupService) {
    this.chapter = new QuestionSetupRequest();
  }
  ngOnInit(): void {
    this.dtOptions = this.service.getChapterDtOptions((res) => { this.chapters = res.data; } );

  }

  submit(form) {
    if (form.invalid) {
      this.toastr.warning('Please fill all the field correctly', 'Warning');
    } else {
      this.service.saveChapter(this.chapter).subscribe(res => {
        this.toastr.success('Submitted', 'Success');
        form.submitted = false;
        form.reset();
      });
    }
  }
}
