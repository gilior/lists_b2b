import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListsPageComponent} from './pages/lists-page/lists-page.component';


const routes: Routes = [
  {path: 'lists', component: ListsPageComponent},
  {path: '', pathMatch: 'full', redirectTo: 'lists'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
