import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowSerieComponent } from './show-serie/show-serie.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';


const serieRoute: Routes = [
  {path: 'show-serie/:id', component: ShowSerieComponent, canActivate: [AuthGuard]}
]


@NgModule({
  declarations: [
    ShowSerieComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(serieRoute)
  ]
})
export class LesSeriesModule { }
