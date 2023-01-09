import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ObservableExample2 {
  constructor() {
    const observer: Observer<any> = {
      next: value => console.log('next:', value),
      error: error => console.warn('error:', error),
      complete: () => console.info('completado')
    };


    const intervalo$ = new Observable<number>(subscriber => {

      // Crear un contador, 1,2,3,4,5,......
      let count = 0;

      const interval = setInterval(() => {
        // cada segundo
        count++;
        subscriber.next(count);
        console.log('Contador: ' + count);

      }, 1000);

      setTimeout(() => {
        subscriber.complete();
      }, 2500);

      return () => {
        clearInterval(interval);
        console.log('Intérvalo destruido');
      }

    });

    
    const subs1 = intervalo$.subscribe(observer);
    const subs2 = intervalo$.subscribe(observer);
    const subs3 = intervalo$.subscribe(observer);

    // Concatena en este caso el unsubscribe a los subs 2 y 3
    subs1.add(subs2)
    subs1.add(subs3);


    setTimeout(() => {
      subs1.unsubscribe()
      // subs2.unsubscribe()
      // subs3.unsubscribe()

      console.log('Completado timeout');
    }, 6000);
  }
}