import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Manga } from "./mangas/manga";
import { MANGAS } from "./mangas/mangas-list";

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  constructor(
    private http: HttpClient
  )
  { }
  getMangaByName(mangaName: string): Manga|undefined {
    return MANGAS.find(manga => manga.name.toLowerCase() == mangaName)
  }

  getMangas(): Observable<Manga []> {
    return this.http.get<Manga []>('api/mangas').pipe(
      catchError((error) => this.handleError(error, [])
      )
    )
  }


  searchManga(name: string): Observable<Manga []>{
    if (name.length < 2) {
      return of([]);
    }

    return this.http.get<Manga []>(`api/mangas/?name=${name}`).pipe(
      catchError((error) => this.handleError(error, []))
    )
  }


  getMangasById(mangaId: number): Observable<Manga | undefined> {
    return this.http.get<Manga>(`api/mangas/${mangaId}`).pipe(
      catchError((error) => this.handleError(error, undefined)
      )
    )
  }

  updateManga(manga: Manga): Observable<null> {
    // creation d'une constante pour notre header
    const httpOptions = {
      headers: new HttpHeaders({'content-type': 'application/json' })
    }

    return this.http.put<null>('api/mangas',  manga, httpOptions)
      .pipe(catchError((error) => this.handleError(error, null)))
  }

  deleteManga(mangaId: number): Observable< null > {
    return this.http.delete(`api/mangas/${mangaId}`).pipe(
      catchError((error) => this.handleError(error, null))
    )
  }

  createManga(manga: Manga): Observable<null> {
    // creation d'une constante pour notre header
    const httpOptions = {
      headers: new HttpHeaders({'content-type': 'application/json' })
    }

    return this.http.post('api/mangas', manga, httpOptions).pipe(
      catchError((error) => this.handleError(error, null))
    )
  }

  private handleError(error: Error, defaultValue: any) {
    console.error(error);
    return of(defaultValue);
  }

}
