import { Component, OnInit } from '@angular/core';
import { FILMS } from '../film/films-list';
import { Film } from '../film/film'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-film',
  templateUrl: './show-film.component.html',
  styleUrls: ['./show-film.component.scss']
})
export class ShowFilmComponent implements OnInit {

  films = FILMS         // je prend ma liste de films
  film: Film|undefined  // je prend le model de ma liste qui servira de foreach

  // j'importe activateRoute POUR AVOIR ACCES a diférent params
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // je chope l'id en string car angular est chiant avec les type
    // je met l'id dans une var
    const filmId: string|null = this.route.snapshot.paramMap.get('id')

    // si j'ai quelque chose j'injecte dans mon model l'id
    // je prend la list, je find mon model.id avec l'id récupérer.
    if (filmId) {
      this.film = this.films.find(film => film.id == +filmId)
    }
  }
}
