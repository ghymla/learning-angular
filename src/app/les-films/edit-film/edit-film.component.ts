import { Component, OnInit } from '@angular/core';
import { Film } from '../film/film';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-edit-film',
  template: `
    <h3> Edit your favorite Film {{ film?.name }}</h3>
    <app-form-film *ngIf="film" [film]="film"></app-form-film>

  `,
  styleUrls: ['./edit-film.component.scss']
})
export class EditFilmComponent implements OnInit {
  film: Film|undefined;

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService
  ) { }

  ngOnInit() {
    const filmId: string|null = this.route.snapshot.paramMap.get('id')

    // si j'ai quelque chose j'injecte dans mon model l'id
    // je récup mon service pour choper l'id
    if (filmId) {
      this.film = this.filmService.getShowFilm(+filmId);
    }
  }

}
