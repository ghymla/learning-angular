import { Injectable } from '@angular/core';
import { Film } from "./film/film";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }


  // je récupe tous les films grace a ma fake api in memory data service
  getfilms(): Observable< Film []> {
    return this.http.get< Film [] >('api/films').pipe(
      tap((films) => this.log(films)),
      catchError((error) =>
        this.handleError(error, [])
      )
    );
  }


  // je chope le film en question avec sont id et je retourne un objet Film (model)
  getShowFilm(filmId: number): Observable< Film | undefined > {
    return this.http.get< Film >(`api/films/${filmId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) =>
        this.handleError(error, undefined)
      )
    );
  }


  searchFilm(term: string): Observable< Film [] > {
    if (term.length < 2) {
      return of([]);
    }

    return this.http.get< Film [] >(`api/films/?name=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) =>
        this.handleError(error, [])
      )
    );
  }


  updateFilm(film: Film): Observable< null >{
    // creation d'une constante pour notre header
    const httpOptions = {
      headers: new HttpHeaders({'content-type': 'application/json' })
    }

    // envoi des nouvelle données put('url', coquileRemplie, header)
    return this.http.put('api/films', film, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  // ici l'observable (le retour demander) est tres important, c'est pour nous créé un Id automatiquement
  createFilm(film: Film): Observable< Film > {
    // creation d'une constante pour notre header
    const httpOptions = {
      headers: new HttpHeaders({'content-type': 'application/json' })
    }
    // pareille je demande un retour objet <Film> pour l'Id
    return this.http.post< Film >('api/films', film, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }


  deleteFilmById(filmId: number): Observable< null > {
    return this.http.delete(`api/films/${filmId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    )
  }


  // method priver pour réfacto un peu affichage de notre get avec api
  private log(response: any) {
    console.table(response);
  }


  // récupération des érreurs et renvoi le type voulu pour éviter un crach
  // of() permet la creation de flux
  private handleError(error: Error , errorValue: any ) {
    console.error(error);
    return of(errorValue);
  }
}
