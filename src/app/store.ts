import { Action } from 'redux';
import {CounterActionsService} from './services/counter-actions.service';


export interface IAppState {
  count: number;
}

export const INITIAL_STATE: IAppState = {
  count: 0,
};

export function rootReducer(lastState: IAppState, action: Action): IAppState {
  switch(action.type) {
    case CounterActionsService.INCREMENT: return { count: lastState.count + 1 };
    case CounterActionsService.DECREMENT: return { count: lastState.count - 1 };
  }

  // We don't care about any other actions right now.
  return lastState;
}
