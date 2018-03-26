import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { OneModule } from '../../modules/module-one';
import { TwoModule } from '../../modules/module-two';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    OneModule,
    TwoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
