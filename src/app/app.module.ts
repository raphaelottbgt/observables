import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsingObservablesComponent } from './using-observables/using-observables.component';
import { PromiseVsObservableComponent } from './promise-vs-observable/promise-vs-observable.component';
import { HotVsColdComponent } from './hot-vs-cold/hot-vs-cold.component';
import { SrsSearchComponent } from './srs-search/srs-search.component';

@NgModule({
  declarations: [
    AppComponent,
    UsingObservablesComponent,
    PromiseVsObservableComponent,
    HotVsColdComponent,
    SrsSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
