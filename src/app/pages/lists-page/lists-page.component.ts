import {Component, OnInit} from '@angular/core';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs';
import {IListItem, IItems} from '../../const';

@Component({
  selector: 'app-lists-page',
  templateUrl: './lists-page.component.html',
  styleUrls: ['./lists-page.component.scss']
})
export class ListsPageComponent implements OnInit {
  @select() readonly items$: Observable<IItems>;
  items: IItems;

  // <- Changed
  constructor() {
  }

  ngOnInit(): void {
    this.items$.subscribe((items: IItems) => this.items = items);
  }

}
