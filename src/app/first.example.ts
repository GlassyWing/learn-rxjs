/**
 * Created by manlier on 2017/3/6.
 */

import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/fromEvent";

let button = document.querySelector('button');
Observable.fromEvent(button, "click")
  .subscribe(()=>console.log("Clicked!"));
