import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'one-component',
  template: `<p>Module One Component!</p>`,
  styles: [`p {color: red;}`]
})
export class OneComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}