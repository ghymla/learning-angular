import { Component, Input } from '@angular/core';
import { Film } from '../film/film';
import { Router } from '@angular/router';
import { FilmService } from "../film.service";



@Component({
  selector: 'app-form-film',
  templateUrl: './form-film.component.html',
  styleUrls: ['./form-film.component.scss']
})
export class FormFilmComponent  {
  @Input() film: Film;


  constructor(
    private router: Router,
    private filmService: FilmService
  ) { }

  // je prend l'info pour l'envoyer a ma méthod update de mon film.service
  // pas oublier ajouter filmService au constructeur puis, je redirige
  onSubmit() {
    this.filmService.updateFilm(this.film).subscribe(
      () => this.router.navigate(["show-film", this.film.id])
    );
  }
}
