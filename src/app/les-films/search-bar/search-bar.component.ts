import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Film } from '../film/film';
import { FilmService } from "../film.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  // la classe Subject appartien a RXJS, elle permet de stoquer un flux des
  // recherches successive de l'utilisateur en flux de données
  searchTerms = new Subject<string>();
  // je déclare la variable film$ pour faire la liaison avec mon searchTerms,
  // il va un peu agir comme un foreach
  films$: Observable<Film[]>;


  constructor(
    private router: Router,
    private filmService: FilmService
  ) { }

  ngOnInit() {
    // je mets les recherche utilisateur dans ma variable film$
    this.films$ = this.searchTerms.pipe(
      // je vais filtrer les recherche pour éviter de tros soliciter mon serveur
      debounceTime(300),
      // il faut un temps de 300ms entre 2 frappe pour lancer la recherche
      distinctUntilChanged(),
      // si il y a deux recherche identique a suivre, je fait qu'une seule demande
      switchMap((term) => this.filmService.searchFilm(term))
      // j'utilise switchmap car si l'utilisateur lance une deuxiemme recherche
      // alors que la première est en cour. il va switcher automatiquement sur la
      // plus récente
    );
  }

  search(term: string) {
    this.searchTerms.next(term);
  }

  goToDetailFilm(film: Film) {
    const link = ['/show-film', film.id]
    this.router.navigate(link);
  }
}
