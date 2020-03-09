import {Component, Input, OnInit} from '@angular/core';
import {constants, IListItem} from '../../const';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../../store';
import MOVE_ITEM = constants.MOVE_ITEM;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() items: IListItem[];
  @Input() listNumber: number;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  ngOnInit(): void {
  }


  trackByItems(index: number, item: IListItem): number {
    return item.id;
  }

  onItemClick(item: IListItem) {
    const listToMove = this.listNumber % 4 + 1;
    const currentList='list'+this.listNumber;
    this.ngRedux.dispatch({type: MOVE_ITEM, payload: {item, currentList, listToMove}});
  }
}
