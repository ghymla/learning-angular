import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { SeriesComponent } from './les-series/series/series.component';
import { MangasComponent } from './les-mangas/mangas/mangas.component';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { LesFilmsModule } from './les-films/les-films.module';
import { FilmComponent } from './les-films/film/film.component';
import { BorderCardDirective } from './les-films/border-card.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SeriesComponent,
    MangasComponent,
    FilmComponent,
    BorderCardDirective,
    PageNoFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LesFilmsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
