import { Component, ViewChild, Injector } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { PersonalDataService } from 'app/shared/services/personal-data.service'

import { Employee } from '../employees.model'

@Component({
  templateUrl: './employees_list.component.html'
})
export class EmployeesListComponent {

  @ViewChild('invite_modal')
  private modal: ModalComponent;

  public user: Employee = new Employee();
  public employees: Array<Employee> = [];
  public ROLES: Array<Object> = [];

  constructor(private injector: Injector, private personalDataService: PersonalDataService) {
    Employee.getAll(injector).subscribe(employees => this.employees = employees);
    this.getMyRole()
  }

  inviteEmployee(): void {
    this.user.invite(this.injector)
      .flatMap(() => Employee.getAll(this.injector))
      .subscribe(
        employees => {
          this.employees = employees;
          this.modal.dismiss()
        },
        () => {}
      )
  }

  updateList(employees) {
    employees.switchStatus(this.injector)
      .flatMap(() => Employee.getAll(this.injector))
      .subscribe(employees => this.employees = employees)
  }

  openModal(): void {
    this.user = new Employee();
    this.modal.open();
  }

  getMyRole(): void {
    this.personalDataService.getSelf().subscribe(user => {
      if (user.type === 'admin_of_user') {
        this.ROLES = [
          { title: 'АН(администратор направления)', value: 'admin_of_direction' },
          { title: 'Оператор', value: 'operator' }
        ]
      } else if (user.type === 'admin_of_direction') {
        this.ROLES = [{ title: 'Оператор', value: 'operator' }]
      } else if (user.type === 'superuser') {
        this.ROLES = [
          { title: 'Бухгалтер', value: 'accountant' },
          { title: 'Эксперт', value: 'expert' }
        ]
      }
    })
  }
}
