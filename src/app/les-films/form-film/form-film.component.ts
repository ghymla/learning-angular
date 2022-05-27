import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../film/film';
import { Router } from '@angular/router';
import { FilmService } from "../film.service";



@Component({
  selector: 'app-form-film',
  templateUrl: './form-film.component.html',
  styleUrls: ['./form-film.component.scss']
})
export class FormFilmComponent implements OnInit {
  @Input() film: Film;
  //creation d'un boolean pour savoir si je veux créé ou update
  isCreateFilm: boolean;

  constructor(
    private router: Router,
    private filmService: FilmService
  ) { }

  ngOnInit(): void {
    // je met le boolean sur true si dans ma route il y a le mot create
    this.isCreateFilm = this.router.url.includes('create');
  }
  // je prend l'info pour l'envoyer a ma méthod update de mon film.service
  // pas oublier ajouter filmService au constructeur puis, je redirige
  onSubmit() {
    // je compare mon booléan pour savoir si je doit crée ou update
    if (this.isCreateFilm) {
      this.filmService.createFilm(this.film).subscribe(
        // le retour est typer avec mon objet, je l'utilise pour la redirection
        (film: Film) => this.router.navigate(["show-film", film.id])
      );
    } else {
      this.filmService.updateFilm(this.film).subscribe(
        () => this.router.navigate(["show-film", this.film.id])
      );
    }

  }
}
