import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowFilmComponent } from './show-film/show-film.component';
import { RouterModule, Routes } from '@angular/router';




const filmRoute: Routes = [
  {path: 'show-film/:id', component: ShowFilmComponent},
]

@NgModule({
  declarations: [
    ShowFilmComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(filmRoute)
  ]
})
export class LesFilmsModule { }
