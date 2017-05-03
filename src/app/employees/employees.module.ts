import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from 'ng2-translate';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { SharedModule } from 'app/shared/shared.module'
import { ToolTipModule } from 'angular2-tooltip'

import { EmployeesListComponent } from 'app/employees/list/employees_list.component';
import { EmployeesTableComponent } from 'app/employees/list/table/employees_table.compoent'
import { LogsModalComponent } from 'app/employees/list/logs_modal/logs_modal.component'

import { OrderByPipe } from 'app/shared/pipes/orderBy';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    TranslateModule,
    Ng2Bs3ModalModule,
    SharedModule,
    ToolTipModule
  ],
  declarations: [
    EmployeesListComponent,
    EmployeesTableComponent,
    LogsModalComponent,
    OrderByPipe
  ],
})
export class EmployeesModule {
}
