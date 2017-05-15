import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { FilesComponent } from './files/files.component';
import { FilesService } from 'app/shared/services/files.service'

@NgModule({
  imports: [
    CommonModule,
    Ng2Bs3ModalModule
  ],
  declarations: [
    FilesComponent
  ],
  providers: [
    FilesService
  ]
})
export class FileSharingModule {
}
