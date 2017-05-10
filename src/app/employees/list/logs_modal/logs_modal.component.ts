import { Component, Injector, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Employee } from '../../employees.model'
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';


@Component({
  selector: 'logs_modal',
  templateUrl: 'logs_modal.component.html',
  providers: [DatePipe],
})
export class LogsModalComponent  {
  public _logs: Array<any> = [];

  @ViewChild('log_modal')
  public modal: ModalComponent;

  constructor(private injector: Injector, private datePipe: DatePipe) {}

  setLogs(employee: Employee) {
    if (employee) employee.getLogs(this.injector).subscribe(logs => this._logs = logs);
    this.modal.open();
  }

  formatLog(log: any): string {
    const STATUSES = {
      active: 'активный',
      blocked: 'заблокирован',
      in_archive: 'в архиве',
    };

    let created_at = this.datePipe.transform(log.created_at, 'dd.MM.yyyy');
    let full_name = `${log.editor.profile.second_name} ${log.editor.profile.first_name[0]}.${log.editor.profile.patronymic ? log.editor.profile.patronymic[0]:''}`;
    return `${full_name}, ${created_at}, ${STATUSES[log.previous_status]} —> ${STATUSES[log.status]}`
  }
}
