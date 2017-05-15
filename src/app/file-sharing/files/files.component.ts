import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { NotificationsService } from 'angular2-notifications';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

import { FilesService } from 'app/shared/services/files.service'

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.sass']
})
export class FilesComponent implements OnInit {
  @ViewChild('doc_legend_modal')
  public modal: ModalComponent;

  contractTemplateFile: File;
  currentContractTemplateUrl: string = '';
  contractLegend = [];

  cardTemplateFile: File;
  currentCardTemplateUrl: string = '';

  constructor(private fileService: FilesService,
              private notify: NotificationsService) {
  }

  ngOnInit() {
    this.fileService.getTemplateUrl('contract')
      .subscribe(
        data => this.currentContractTemplateUrl = data.url
      );
    this.fileService.getTemplateUrl('business_card')
      .subscribe(
        data => this.currentCardTemplateUrl = data.url
      );
    this.fileService.getLegend()
      .subscribe(
        data => this.contractLegend = data
      );
  }

  fileChange(event, type) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      if (type == 'contract') {
        this.contractTemplateFile = fileList[0];
      } else if (type == 'business_card') {
        this.cardTemplateFile = fileList[0];
      }

    }
  }

  fileUpload(type) {
    let file = type === 'contract' ? this.contractTemplateFile : this.cardTemplateFile;
    if (!file) return;
    this.fileService.uploadTemplate(file, type)
      .catch(error => Observable.throw(error))
      .subscribe(
        data => this.notify.success('Успешно!', 'Шаблон загружен'),
        error => this.notify.error('Ошибка!', 'Не корректный шаблон')
      )
  }


  showLegend() {
    this.modal.open();
  }

}
