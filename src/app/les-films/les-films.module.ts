import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowFilmComponent } from './show-film/show-film.component';
import { RouterModule, Routes } from '@angular/router';
import { FormFilmComponent } from './form-film/form-film.component';
import { FormsModule } from '@angular/forms';




const filmRoute: Routes = [
  {path: 'show-film/:id', component: ShowFilmComponent},
  {path: 'show-film/:id/edit', component: FormFilmComponent},
]

@NgModule({
  declarations: [
    ShowFilmComponent,
    FormFilmComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(filmRoute)
  ]
})
export class LesFilmsModule { }
