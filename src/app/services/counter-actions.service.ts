import {Injectable} from '@angular/core';
import {Action} from 'redux';
import {Observable} from 'rxjs';
import {IItems} from '../const';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CounterActionsService {
  static INCREMENT = 'INCREMENT';
  static DECREMENT = 'DECREMENT';

  constructor(private http: HttpClient) {
  }

  increment(): Action {
    return {type: CounterActionsService.INCREMENT};
  }

  decrement(): Action {
    return {type: CounterActionsService.DECREMENT};
  }

  getItems(): Observable<IItems> {
    return this.http.get<IItems>('localhost:3000/api/list');
  }
}
