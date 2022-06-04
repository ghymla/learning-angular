import { HttpClient } from '@angular/common/http';
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
      catchError((error) => {
        console.error(error);
        return of([]);
      })
    )
  }
}
