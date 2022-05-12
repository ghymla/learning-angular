import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { FilmComponent } from './film/film.component';
import { SeriesComponent } from './series/series.component';
import { MangasComponent } from './mangas/mangas.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FilmComponent,
    SeriesComponent,
    MangasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
