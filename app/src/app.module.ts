import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { OneModule, TwoModule, ThreeModule } from '../../lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    OneModule,
    TwoModule,
    ThreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
