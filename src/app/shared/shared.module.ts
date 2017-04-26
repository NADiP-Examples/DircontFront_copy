import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { SpoilerBlockComponent } from './components/spoiler-block/spoiler-block.component'
import { LocationComponent } from './components/location/location.component'
import { LeftMenuComponent } from './components/left-menu/left-menu.component'
import { TopMenuComponent } from './components/top-menu/top-menu.component'
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome'

@NgModule({
  imports: [
    BrowserModule,
    Angular2FontAwesomeModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    SpoilerBlockComponent,
    LocationComponent,
    LeftMenuComponent,
    TopMenuComponent
  ],
  declarations: [
    SpoilerBlockComponent,
    LocationComponent,
    LeftMenuComponent,
    TopMenuComponent,

  ]
})
export class SharedModule {
}
