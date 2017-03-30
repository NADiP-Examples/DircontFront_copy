import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bank-data',
  templateUrl: './bank-data.component.html',
  styleUrls: ['./bank-data.component.sass']
})
export class BankDataComponent implements OnInit {
  @Input() bank_data;

  constructor() { }

  ngOnInit() {
  }

}
