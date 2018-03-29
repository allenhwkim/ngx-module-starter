import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'one-component',
  template: `<button (click)="buttonClicked$.emit()">Click This</button>`,
  styles: [`p {color: red;}`]
})
export class OneComponent {
  @Output() buttonClicked$: EventEmitter<any> = new EventEmitter();
}