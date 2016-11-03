import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsingObservablesComponent } from './using-observables/using-observables.component';
import { PromiseVsObservableComponent } from './promise-vs-observable/promise-vs-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    UsingObservablesComponent,
    PromiseVsObservableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
