import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome'

import  { SpoilerBlockComponent } from './components/spoiler-block/spoiler-block.component'

@NgModule({
  imports: [
    CommonModule,
    Angular2FontAwesomeModule
  ],
  exports: [SpoilerBlockComponent],
  declarations: [
    SpoilerBlockComponent,
  ]
})
export class SharedModule {
}
