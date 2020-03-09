import {Component, OnInit} from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import {Observable} from 'rxjs';
import {constants, IItems, ILoginDetails} from '../../const';
import {CounterActionsService} from '../../services/counter-actions.service';
import {IAppState} from '../../store';
import {Router} from '@angular/router';
import ITEMS_LOADED = constants.ITEMS_LOADED;
import CLEAR_USER = constants.CLEAR_USER;

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {
  @select() readonly loginDetails$: Observable<ILoginDetails>;

  constructor(private counterActionsService: CounterActionsService, private ngRedux: NgRedux<IAppState>, private router: Router) {
  }

  ngOnInit(): void {
  }

  onReset() {
    this.counterActionsService.getItems()
      .subscribe((items: IItems) => {
        this.ngRedux.dispatch({type: ITEMS_LOADED, payload: items});
      });
  }

  onPrint() {
    this.router.navigate(['./print']);
  }

  onLogout() {
    this.ngRedux.dispatch({type: CLEAR_USER});
    this.router.navigate(['./login']);
  }
}
