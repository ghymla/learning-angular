import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowMangaComponent } from './show-manga/show-manga.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { FormsModule } from '@angular/forms';
import { FormMangaComponent } from './form-manga/form-manga.component';
import { EditMangaComponent } from './edit-manga/edit-manga.component';
import { CreateMangaComponent } from './create-manga/create-manga.component';

const mangaRoute: Routes = [
  {path: 'show-manga/:id', component: ShowMangaComponent},// canActivate: [AuthGuard]
  {path: 'edit-manga/:id', component: EditMangaComponent},// canActivate: [AuthGuard]
  {path: 'create-manga', component: CreateMangaComponent} // canActivate: [AuthGuard]
]

@NgModule({
  declarations: [
    ShowMangaComponent,
    FormMangaComponent,
    EditMangaComponent,
    CreateMangaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(mangaRoute)
  ]
})
export class LesMangasModule { }
