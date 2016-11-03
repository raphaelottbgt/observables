import { Component, OnInit } from '@angular/core';

import * as Rx from 'rxjs';

@Component({
  selector: 'using-observables',
  templateUrl: './using-observables.component.html',
  styleUrls: ['./using-observables.component.css']
})
export class UsingObservablesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let values = [2, 4, 6, 8, 10, 12, 14, 42];

    /* observable created from an array of numbers and modified with some operators */
    let stream1 = Rx.Observable.from(values).filter(value => value > 10).take(2);
    // stream1.subscribe(value => console.log(value));

    /* observable emitting data over time and completing after a certain amount of emitted values */
    let stream2 = new Rx.Observable(observer => {
      let x = 0;
      setInterval(() => {
        if (x < 5)
          observer.next(x);
        else
          observer.complete();

        /* 
        // add an error if you want
        if(x == 3)
          observer.error(new Error("ERROR"));
        */

        x++;
      }, 1000);
    });

    let subscription = stream2.subscribe(
      value => console.log(value),
      error => console.log(error),
      () => {
        console.log("subscription1 completed!");
        subscription.unsubscribe();
      });

    let subscription2 = stream2
      .forEach(value => console.log(value))
      .then(() => console.log("subscription2 completed!"))
      .catch(error => console.log(error));
  }

}
