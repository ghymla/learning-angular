import { Injectable } from '@angular/core';
import { Serie } from "./series/serie";
import { catchError, Observable, of, tap } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(
    private http: HttpClient
  ) { }

  getSeriesList(): Observable<Serie []> {
    return this.http.get<Serie []>('api/series').pipe(
      catchError(
        (error) => this.handleError(error, [])
      )
    )
  }

  getSerieById(serieId: number): Observable<Serie | undefined> {
    return this.http.get<Serie>(`api/series/${serieId}`).pipe(
      tap((msg) => this.log(msg)),
      catchError(
        (error) => this.handleError(error, undefined)
      )
    )
  }


  searchSerie(name: string): Observable <Serie []>{
    if (name.length < 2) {
      return of([]);
    }

    return this.http.get<Serie []>(`api/series/?name=${name}`).pipe(
      catchError((error) => this.handleError(error, []))
    )
  }

  updateSerie(serie: Serie): Observable<Serie> {
    //header
    const httpOptions = {
      headers: new HttpHeaders({'content-type': 'application/json'})
    }

    return this.http.put<Serie>('api/series', serie, httpOptions).pipe(
      catchError((error) => this.handleError(error, undefined))
    )
  }

  createSerie(serie: Serie): Observable<Serie> {
    //header
    const httpOptions = {
      headers: new HttpHeaders({'content-type': 'application/json'})
    }

    return this.http.post<Serie>('api/series', serie, httpOptions).pipe(
      catchError((error) => this.handleError(error, undefined))
    )
  }

  deleteSerie(serieId: number): Observable<null> {
    return this.http.delete(`api/series/${serieId}`).pipe(
      catchError((error) => this.handleError(error, null))
    )
  }


  private handleError(error: Error, errorDefault: any) {
    console.error(error);
    return of(errorDefault);
  }

  private log(response: any) {
    console.log(response);
  }
}
