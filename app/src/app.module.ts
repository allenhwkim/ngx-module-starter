import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { OneModule, TwoModule } from 'ngx-module-starter';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    OneModule,
    TwoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
