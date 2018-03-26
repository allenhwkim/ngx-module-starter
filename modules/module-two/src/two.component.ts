import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'two-component',
  template: `<p>Module Two Component!</p>`,
  styles: [`p {color: blue;}`]
})
export class TwoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}