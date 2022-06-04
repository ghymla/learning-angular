import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowMangaComponent } from './show-manga/show-manga.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { FormsModule } from '@angular/forms';

const mangaRoute: Routes = [
  {path: 'show-manga/:id', component: ShowMangaComponent, canActivate: [AuthGuard]}
]

@NgModule({
  declarations: [
    ShowMangaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(mangaRoute)
  ]
})
export class LesMangasModule { }
