import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { OthersComponent } from './others/others.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DemoPageComponent, OthersComponent]
})
export class DesignDemoModule { }
