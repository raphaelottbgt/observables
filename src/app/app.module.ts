import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsingObservablesComponent } from './using-observables/using-observables.component';
import { PromiseVsObservableComponent } from './promise-vs-observable/promise-vs-observable.component';
import { HotVsColdComponent } from './hot-vs-cold/hot-vs-cold.component';

@NgModule({
  declarations: [
    AppComponent,
    UsingObservablesComponent,
    PromiseVsObservableComponent,
    HotVsColdComponent
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
