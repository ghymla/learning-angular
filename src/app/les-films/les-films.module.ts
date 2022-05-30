import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowFilmComponent } from './show-film/show-film.component';
import { RouterModule, Routes } from '@angular/router';
import { FormFilmComponent } from './form-film/form-film.component';
import { FormsModule } from '@angular/forms';
import { EditFilmComponent } from './edit-film/edit-film.component';
import { CreateFilmComponent } from './create-film/create-film.component';


const filmRoute: Routes = [
  {path: 'show-film/:id', component: ShowFilmComponent},
  {path: 'create-film', component: CreateFilmComponent},
  {path: 'edit-film/:id', component: EditFilmComponent},
]

@NgModule({
  declarations: [
    ShowFilmComponent,
    FormFilmComponent,
    EditFilmComponent,
    CreateFilmComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(filmRoute)
  ]
})
export class LesFilmsModule { }
