import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesComponent } from './files/files.component';
import { FilesService } from 'app/shared/services/files.service'

@NgModule({
  imports: [
    CommonModule
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
