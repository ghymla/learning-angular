import { Injectable } from '@angular/core';
import { Film } from "./film/film";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {


  constructor(private http: HttpClient) { }

  // je récupe tous les films grace a ma fake api in memory data service
  getfilms(): Observable< Film [] | unknown > {
    return this.http.get< Film [] >('api/index').pipe(
      tap((films) => this.log(films)),
      catchError((error) =>
        this.handleError(error, [])
      )
    );
  }


  // je chope le film en question avec sont id et je retourne un objet Film (model)
  getShowFilm(filmId: number): Observable< Film | undefined | unknown > {
    return this.http.get< Film >(`api/show-film/${filmId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) =>
        this.handleError(error, undefined)
      )
    );
  }


  // method priver pour réfacto un peu affichage de notre get avec api
  private log(response: Film [] | Film | undefined) {
    console.table(response);
  }

  // récupération des érreurs et renvoi le type voulu pour éviter un crach
  // of() permet la creation de flux
  private handleError(error: Error , errorValue: any ) {
    console.error(error);
    return of(errorValue);
  }
}
