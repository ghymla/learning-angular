import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowSerieComponent } from './show-serie/show-serie.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { FormSerieComponent } from './form-serie/form-serie.component';
import { FormsModule } from '@angular/forms';
import { EditSerieComponent } from './edit-serie/edit-serie.component';
import { CreateSerieComponent } from './create-serie/create-serie.component';


const serieRoute: Routes = [
  {path: 'show-serie/:id', component: ShowSerieComponent, canActivate: [AuthGuard]},
  {path: 'edit-serie/:id', component: EditSerieComponent, canActivate: [AuthGuard]},
  {path: 'create-serie', component: CreateSerieComponent, canActivate: [AuthGuard]}
]


@NgModule({
  declarations: [
    ShowSerieComponent,
    FormSerieComponent,
    EditSerieComponent,
    CreateSerieComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(serieRoute)
  ]
})
export class LesSeriesModule { }
