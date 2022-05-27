import { Component, OnInit } from '@angular/core';
import { Film } from '../film/film';

@Component({
  selector: 'app-create-film',
  template: `
    <h3> Bienvenue dans la creation de votre film!! </h3>
    <app-form-film [film]="film"></app-form-film>
  `,
  styleUrls: ['./create-film.component.scss']
})
export class CreateFilmComponent implements OnInit {
  film: Film;

  ngOnInit() {
    this.film = new Film();
  }

}
