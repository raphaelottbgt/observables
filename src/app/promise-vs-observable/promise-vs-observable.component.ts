import { Component, OnInit } from '@angular/core';

import * as Rx from 'rxjs';

@Component({
  selector: 'promise-vs-observable',
  templateUrl: './promise-vs-observable.component.html',
  styleUrls: ['./promise-vs-observable.component.css']
})
export class PromiseVsObservableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("hello");
      }, 1000);
      console.log("promise started");
    });

    promise.then(value => console.log(value));

    let stream = Rx.Observable.create(observer => {
      let timer = setTimeout(() => {
        observer.next("world");
      }, 2000);
      console.log("observable started");

      return () => {
        console.log("disposed");
        clearTimeout(timer);
      }

    });

    let subscription = stream.subscribe(value => console.log(value));

    /* unsubscribe if you want
    setTimeout(() => {
      subscription.unsubscribe();
    }, 1500);
    */
  }

}
