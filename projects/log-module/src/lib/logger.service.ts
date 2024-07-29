import {InjectionToken} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

export const LOGGER = new InjectionToken<Logger>('Application logger', {
  providedIn: 'root',
  factory: () => new LoggerService()
})

export interface Logger {
  get logs(): Observable<Log[]>;
  set log(msg: string);
}

class Log {
  id: number;
  msg: string;

  constructor(id: number, msg: string) {
    this.id = id;
    this.msg = msg;
  }
}

export class LoggerService implements Logger {

  private _logs = new BehaviorSubject<Log[]>([]);

  constructor() { }

  get logs(): Observable<Log[]> {
    return this._logs.asObservable();
  }

  set log(msg: string) {
    this._logs.next([
      new Log(this._logs.value.length, msg),
      ...this._logs.value
    ]);
  }
}
