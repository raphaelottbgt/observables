import { Component, OnInit } from '@angular/core';

import * as Rx from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Observables';

  constructor() {}

  ngOnInit() {

  }

}
