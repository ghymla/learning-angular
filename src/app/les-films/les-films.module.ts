import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowFilmComponent } from './show-film/show-film.component';
import { RouterModule, Routes } from '@angular/router';
import { FormFilmComponent } from './form-film/form-film.component';
import { FormsModule } from '@angular/forms';
import { EditFilmComponent } from './edit-film/edit-film.component';





const filmRoute: Routes = [
  {path: 'show-film/:id', component: ShowFilmComponent},
  {path: 'edit-film/:id', component: EditFilmComponent},
]

@NgModule({
  declarations: [
    ShowFilmComponent,
    FormFilmComponent,
    EditFilmComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(filmRoute)
  ]
})
export class LesFilmsModule { }
