import {delay, Observable, retry} from "rxjs";

export function tripleRetransmission<T>(obs: Observable<T>): Observable<T> {
  return obs.pipe(
    retry(3),
    delay(1000),
  )
}
