import { Injectable } from '@angular/core';
import { Film } from "./film/film";
import { FILMS } from "./film/films-list";

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  // je récupe tous les films grace a ma data FILMS je demande un retour de mon model Film en liste
  getfilms(): Film [] {
    return FILMS;
  }


  // je chope le film en question avec sont id et je retourne un objet Film (model)
  getShowFilm(filmId: number): Film|undefined {
    return FILMS.find(film => film.id == filmId );
  }
}
