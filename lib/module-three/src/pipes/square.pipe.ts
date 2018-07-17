import { Pipe, PipeTransform } from '@angular/core';

/**
 * The SquarePipe converts a number to its square
 */
@Pipe({name: 'square'})
export class SquarePipe implements PipeTransform {
  transform(value: number): number {
    const val: number = parseFloat(String(value));

    return Math.pow(val, 2);
  }
}
