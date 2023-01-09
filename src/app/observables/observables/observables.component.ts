import { Component, OnInit } from '@angular/core';
import { ObservableExample1 } from './../ejemplos-observables/1';
import { ObservableExample2 } from '../ejemplos-observables/2';
import { ObservableExample3 } from '../ejemplos-observables/3';
import { ObservableOf } from '../ejemplos-observables/of';
import { ObservableFromEvent } from '../ejemplos-observables/fromEvent';
import { ObservableRange } from '../ejemplos-observables/range';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  constructor(
    // _obsExample1: ObservableExample1,
    // _obsExample2: ObservableExample2,
    // _obsExample3: ObservableExample3,
    // _obsOf: ObservableOf,
    _obsFromEvent: ObservableFromEvent,
    // _obsRange: ObservableRange
  ) { }

  ngOnInit(): void {
  }

}
