import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { FilmComponent } from './film/film.component';
import { SeriesComponent } from './series/series.component';
import { MangasComponent } from './mangas/mangas.component';
import { BorderCardDirective } from './border-card.directive';
import { ShowFilmComponent } from './show-film/show-film.component';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FilmComponent,
    SeriesComponent,
    MangasComponent,
    BorderCardDirective,
    ShowFilmComponent,
    PageNoFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
