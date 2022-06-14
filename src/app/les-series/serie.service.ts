import { Injectable } from '@angular/core';
import { Serie } from "./series/serie";
import { catchError, Observable, of, tap } from "rxjs";
import { HttpClient } from '@angular/common/http';

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

  private handleError(error: Error, errorDefault: any) {
    console.error(error);
    return of(errorDefault);
  }

  private log(response: any) {
    console.log(response);
  }
}
