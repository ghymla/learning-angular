import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ShowFilmComponent } from './show-film/show-film.component';


const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'show-film/:id', component: ShowFilmComponent},
  {path: '', redirectTo: 'index', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
