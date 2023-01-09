import { Injectable, OnDestroy } from "@angular/core";
import { asyncScheduler, observeOn, range, Subject, takeUntil } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ObservableRange implements OnDestroy {

  private destroy$: Subject<any>;
  constructor() {
    this.destroy$ = new Subject()

    // const src$ = of(1,2,3,4,5);
    const src$ = range(1, 5).pipe(observeOn(asyncScheduler), takeUntil(this.destroy$));


    console.log('inicio');
    src$.subscribe(console.log);
    console.log('fin');
  }

  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete();
  }
}