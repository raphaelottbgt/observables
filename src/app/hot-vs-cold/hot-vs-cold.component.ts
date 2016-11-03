import { Component, OnInit } from '@angular/core';

import * as Rx from 'rxjs';

@Component({
  selector: 'hot-vs-cold',
  templateUrl: './hot-vs-cold.component.html',
  styleUrls: ['./hot-vs-cold.component.css']
})
export class HotVsColdComponent implements OnInit {

  private currentValue1:number = 0;
  private currentValue2:number = 0;

  constructor() { }

  ngOnInit() {
    let coldStream = this.createObservable();

    // coldStream.subscribe(value => this.currentValue1 = value);
    // coldStream.subscribe(value => this.currentValue2 = value);

    let hotStream = this.createObservable().publish();

    hotStream.connect();

    hotStream.subscribe(value => this.currentValue1 = value);
    setTimeout(() => {
      hotStream.subscribe(value => this.currentValue2 = value);
    }, 3000);
    
  }

  private createObservable():Rx.Observable<number> {
    return new Rx.Observable<number>(observer => {
      setInterval(() => {
        observer.next((Math.random() * (0 - 100) + 100).toFixed(0));
      }, 1000);
    });
  }

}
