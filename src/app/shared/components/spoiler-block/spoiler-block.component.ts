import { Component, OnInit, Input, trigger, state, transition, style, animate } from '@angular/core';

@Component({
  selector: 'spoiler-block',
  templateUrl: 'spoiler-block.component.html',
  styleUrls: ['spoiler-block.component.sass'],
  animations: [
    trigger('spoilerState', [
      state('close', style({
        height: '0'
      })),
      state('open', style({
        height: '*'
      })),
      transition('open => close', animate('300ms')),
      transition('close => open', animate('150ms'))
    ])
  ]
})

export class SpoilerBlockComponent implements OnInit {
  @Input() header;
  state: string = "open";
  toggleClasses = { open: "minus-square-o", close: "plus-square-o" };
  toggleClass: string = this.toggleClasses[this.state];

  constructor() {
  }

  ngOnInit() {
  }

  toggle() {
    this.state = this.state != 'open' ? 'open' : 'close';
    this.toggleClass = this.toggleClasses[this.state];
  }

}
