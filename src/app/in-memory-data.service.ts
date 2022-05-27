import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { FILMS } from './les-films/film/films-list';
import { MANGAS } from './les-mangas/mangas/mangas-list';
import { SERIES } from './les-series/series/series-list';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const films = FILMS;
    const series = SERIES;
    const mangas = MANGAS;
    return { films, series, mangas };
  }
}
