import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ObservableExample1 {
  constructor() {
    const observer: Observer<any> = {
      next: value => console.log('siguiente [next]:', value),
      error: error => console.warn('error [obs]:', error),
      complete: () => console.info('completado [obs]')
    };

    // const obs$ = Observable.create();
    const obs$ = new Observable<string>(subs => {

      subs.next('Hola');
      subs.next('Mundo');

      subs.next('Hola');
      subs.next('Mundo');

      // Forzar un error
      // const a  = undefined;
      // a.nombre = 'Fernando';


      subs.complete();
      subs.next('Hola');
      subs.next('Mundo');

    });

    obs$.subscribe(observer);

    // obs$.subscribe(
    //     valor => console.log('next: ', valor),
    //     error => console.warn('error: ', error),
    //     () => console.info('Completado')
    // );
  }
}
