import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bank-data',
  templateUrl: './bank-data.component.html',
  styleUrls: ['./bank-data.component.sass']
})
export class BankDataComponent implements OnInit {
  @Input() personal_data;
  @Input() form_view: Object;

  constructor() { }

  ngOnInit() {
  }

}
