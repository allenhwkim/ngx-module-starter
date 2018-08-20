import { Component, EventEmitter, Output } from '@angular/core';

/**
 * The is a sample component of common module.
 */
@Component({
  selector: 'my-component-1',
  template: `
    <button (click)="buttonClicked$.emit()">Click This</button>
  `,
  styles: ['']
})
export class OneComponent {
  @Output() buttonClicked$: EventEmitter<any> = new EventEmitter();
}
