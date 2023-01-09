import { Injectable } from "@angular/core";
import { fromEvent, Observable, Observer, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ObservableFromEvent {
  constructor() {
    const obs1$ = fromEvent<PointerEvent>(document, 'click');
    const obs2$ = fromEvent<KeyboardEvent>(document, 'keyup');

    obs1$.subscribe(({x, y}) => {
      console.log(x, y);
    });

    obs2$.subscribe((ev) => {
      console.log(ev.key);
    });
  }
}