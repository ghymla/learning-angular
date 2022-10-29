import { Component, OnInit } from '@angular/core';
import { Film } from "./film";
import { Router } from '@angular/router';
import { FilmService } from '../film.service';



@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  films: Film [];
  film: Film | undefined;

  constructor(
    private router: Router,
    private filmService: FilmService
  ) { }

  ngOnInit() {
    this.filmService.getfilms().subscribe(
      filmList => this.films = filmList
    );
  }

  // petit event clasique pour montrer le fonctionnement
  actionClick(event: MouseEvent){
    console.log("tu viens de click sur un film")
    console.log(event.target)
  }

  // creation d'un envoi sur ma page de film
  // utilisation de la méthod Router donc a
  // appeller dans le constructeur
  goToFilm(film: Film) {
    // équivaut a taper l'url /show-film/:id
    this.router.navigate(["show-film", film.id])
  }

  addFilm() {
    this.router.navigate(["create-film"])
  }
}
