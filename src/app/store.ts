import {Action} from 'redux';
import {constants, IItems, ILoginDetails} from './const';
import ITEMS_LOADED = constants.ITEMS_LOADED;
import CLEAR_USER = constants.CLEAR_USER;
import MOVE_ITEM = constants.MOVE_ITEM;


export interface IAppState {
  list_items: IItems;
  loginDetails: ILoginDetails
}

export const INITIAL_STATE: IAppState = {
  // count: 0,
  list_items: null,
  loginDetails: null
};

export function rootReducer(lastState: IAppState, action: Action): IAppState {
  switch (action.type) {

    case ITEMS_LOADED:
      const new_items = action['payload'] as IItems;
      return {
        ...lastState,
        list_items:
          {
            list_1: new_items.list_1,
            list_2: new_items.list_1,
            list_3: new_items.list_1,
            list_4: new_items.list_1,
          }
      };
    case CLEAR_USER:
      return {...lastState, loginDetails: null, list_items: null};
    case MOVE_ITEM:
      let old_list = {...lastState};
      old_list.list_items[old_list.list_items[action['payload'].currentList]].splice(old_list.list_items[action['payload'].currentList.indexOf(action['payload'].item)], 1);
      old_list.list_items[old_list.list_items[action['payload'].listToMove]].push(action['payload'].item);
      return old_list;
  }

  // We don't care about any other actions right now.
  return lastState;
}
