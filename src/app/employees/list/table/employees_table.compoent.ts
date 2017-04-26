import { Component, Input, Output, EventEmitter, Injector, OnChanges } from '@angular/core';
import { Employee } from '../../employees.model'


@Component({
  selector: 'employees_table',
  templateUrl: 'employees_table.component.html',
  styleUrls: ['employees_table.component.sass']
})
export class EmployeesTableComponent implements OnChanges  {
  private _isArchived: boolean = false;
  public _employees: Array<Employee> = [];
  public STATUSES: Array<Object> = Employee.STATUSES;
  private sortData: string = '';

  @Input()
  set employees(employees: Array<Employee>) {
    this._employees = this.employeesFilter(employees);
  }
  @Input()
  set isArchived(isArchived: boolean) {
    this._isArchived = isArchived;
  }
  @Output() update = new EventEmitter<any>();

  constructor(private injector: Injector) {}


  ngOnChanges() {}

  private sort = function (keyname) {
    this.sortData = this.sortData === keyname ? `-${keyname}` : keyname
  };

  private switchStatus(employee: Employee): void {
    this.update.next(employee);
  }

  private employeesFilter(employees: Array<Employee>): Array<Employee> {
    return employees.filter(e => this._isArchived ? e.status === 'in_archive' : e.status !== 'in_archive')
  }

}
