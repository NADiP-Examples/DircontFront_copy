import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { NotificationsService } from 'angular2-notifications';

import { FilesService } from 'app/shared/services/files.service'

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.sass']
})
export class FilesComponent implements OnInit {

  file: File;
  currentContractTemplate: string = '';

  constructor(private fileService: FilesService,
              private notify: NotificationsService) {
  }

  ngOnInit() {
    this.fileService.getContractTemplateUrl()
      .subscribe(
        data => this.currentContractTemplate = data.url
      )
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.file = fileList[0];
    }
  }

  fileUpload() {
    if (!this.file) return;
    this.fileService.uploadContractTemplate(this.file, true)
      .catch(error => Observable.throw(error))
      .subscribe(
        data => {
          this.fileService.uploadContractTemplate(this.file)
            .catch(error => Observable.throw(error))
            .subscribe(
              data => this.notify.success('Успешно!', 'Шаблон договора загружен'),
              error => console.log(error)
            )
        },
        error => this.notify.error('Ошибка!', 'Не корректный шаблон договора')
      )

  }

}
