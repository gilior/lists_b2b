import {Component, Input, OnInit} from '@angular/core';
import {IListItem} from '../../const';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() items:IListItem

  constructor() {
  }

  ngOnInit(): void {
  }

}
