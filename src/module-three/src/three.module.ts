import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeComponent } from './components';
import { DataService } from './services';
import { SquarePipe} from './pipes';

/**
 * The module registers component, service and pipe created in the module
 */
@NgModule({
  imports: [CommonModule],
  declarations: [ThreeComponent, SquarePipe],
  exports: [ThreeComponent, SquarePipe],
  providers: [DataService]
})
export class ThreeModule {}
