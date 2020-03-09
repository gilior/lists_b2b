export interface IListItem {
  id: number;
  name: string;
}

export interface IItems {
  list_1: IListItem[];
  list_2: IListItem[];
  list_3: IListItem[];
  list_4: IListItem[];
}

export interface ILoginDetails {
  name:string;
  email:string;

}

export  module constants{
  export const ITEMS_LOADED='items_loaded'
  export const CLEAR_USER='clear_user'
  export const MOVE_ITEM='move_item'
}


