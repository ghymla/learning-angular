import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, of, Subject, switchMap } from 'rxjs';
import { Film } from '../film/film';
import { Serie } from '../../les-series/series/serie';
import { FilmService } from "../film.service";
import { MangaService } from 'src/app/les-mangas/manga.service';
import { SerieService } from 'src/app/les-series/serie.service';
import { Manga } from 'src/app/les-mangas/mangas/manga';

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
  categories$: Observable<any>;
  // j'intégre une autre variable, la catégorie
  categorie: string;


  constructor(
    private router: Router,
    private filmService: FilmService,
    private mangaService: MangaService,
    private serieService: SerieService
  ) { }

  ngOnInit() {
    // je mets les recherche utilisateur dans ma variable film$

    this.categories$ = this.searchTerms.pipe(
      // je vais filtrer les recherche pour éviter de tros soliciter mon serveur
      debounceTime(300),
      // il faut un temps de 300ms entre 2 frappe pour lancer la recherche
      distinctUntilChanged(),
      // si il y a deux recherche identique a suivre, je fait qu'une seule demande
      switchMap((term) => this.searchCategorie(term))
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

  categorieChoice(categorie: string) {
    this.categorie = categorie;
  }

  searchCategorie(searchName: string): any {
    if (this.categorie == "film") {
      return this.filmService.searchFilm(searchName)
    }else if (this.categorie == "manga") {
      return this.mangaService.searchManga(searchName)
    }else if (this.categorie == "serie") {
      return this.serieService.searchSerie(searchName)
    }else {
      return (undefined);
    }
  }
}
