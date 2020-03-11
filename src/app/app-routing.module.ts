import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListsPageComponent} from './pages/lists-page/lists-page.component';
import {PrintPageComponent} from './pages/print-page/print-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {AuthGuard} from "./auth/auth.guard";


const routes: Routes = [
  {path: 'lists', component: ListsPageComponent, canActivate: [AuthGuard]},
  {path: 'print', component: PrintPageComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginPageComponent},
  {path: '', pathMatch: 'full', redirectTo: 'lists'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
