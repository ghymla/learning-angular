import { Injectable } from '@angular/core';
import { Manga } from "./mangas/manga";
import { MANGAS } from "./mangas/mangas-list";

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  getMangaByName(mangaName: string): Manga|undefined {
    return MANGAS.find(manga => manga.name.toLowerCase() == mangaName)
  }

  getMangas(): Manga [] {
    return MANGAS;
  }
}
