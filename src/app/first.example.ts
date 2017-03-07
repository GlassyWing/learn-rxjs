/**
 * Created by manlier on 2017/3/6.
 */

import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/scan";

let button = document.querySelector('button');
Observable.fromEvent(button, "click")
  .scan<number>(count => count + 1, 0)
  .subscribe(count => console.log(`Clicked ${count} times`));
