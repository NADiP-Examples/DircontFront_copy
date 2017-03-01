import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-edit',
  templateUrl: 'profile-edit.component.html',
  styleUrls: ['profile-edit.component.sass']
})
export class ProfileEditComponent implements OnInit {
  private legalStatus = 'entity';
  private residency = 'russian_resident';
  private paymentType = 'bank';
  private position = 'employee';  // employee || director
  constructor() { }

  ngOnInit() {
  }

}
