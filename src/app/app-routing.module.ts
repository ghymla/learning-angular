import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { ShowFilmComponent } from './show-film/show-film.component';


const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'show-film/:id', component: ShowFilmComponent},
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: '**', component: PageNoFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
