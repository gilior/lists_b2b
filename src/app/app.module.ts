import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { ListsPageComponent } from './pages/lists-page/lists-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PrintPageComponent } from './pages/print-page/print-page.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import {IAppState, INITIAL_STATE, rootReducer} from './store';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginComponent,
    ListsPageComponent,
    LoginPageComponent,
    PrintPageComponent,
    ToolBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>){
    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE);
  }
}
