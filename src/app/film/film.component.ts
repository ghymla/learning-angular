import { Component, OnInit } from '@angular/core';
import { FILMS } from './films-list';
import { Film } from "./film";
import { Router } from '@angular/router';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  films = FILMS         // je prend ma liste de films

  constructor(private router: Router) { }

  ngOnInit() { }

  actionClick(event: MouseEvent){
    console.log("tu viens de click sur un film")
    console.log(event.target)
  }

  goToFilm(film: Film) {
    this.router.navigate(["show-film", film.id])
  }
}
