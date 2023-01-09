import { Injectable } from "@angular/core";
import { Observable, Observer, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ObservableOf {
  constructor() {
    const observer: Observer<any> = {
      next: value => console.log('next:', value),
      error: error => console.warn('error:', error),
      complete: () => console.info('Terminamos la secuencia')
    };

    // const obs$ = of(...[1, 2, 3, 4, 5, 6], 2, 3, 4, 5);
    const obs$ = of( [1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true) );

    console.log('Inicio del Obs$');
    obs$.subscribe(observer);
    console.log('Fin del Obs$');
  }
}