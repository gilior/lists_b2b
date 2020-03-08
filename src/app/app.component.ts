import { Component } from '@angular/core';
import {CounterActionsService} from './services/counter-actions.service';
import {NgRedux} from '@angular-redux/store';
import {IItems} from './const';
import {IAppState} from './store';

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
        this.ngRedux.dispatch({type:''})
      })
  }
}
