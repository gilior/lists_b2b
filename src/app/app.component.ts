import { Component } from '@angular/core';
import {CounterActionsService} from './services/counter-actions.service';
import {NgRedux} from '@angular-redux/store';
import {constants, IItems} from './const';
import {IAppState} from './store';
import ITEMS_LOADED = constants.ITEMS_LOADED;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lists';

  constructor(private counterActionsService:CounterActionsService,private ngRedux:NgRedux<IAppState>){
    this.counterActionsService.getItems()
      .subscribe((items:IItems)=>{
        this.ngRedux.dispatch({type:ITEMS_LOADED,payload:items})
      })
  }
}
