import { Injectable } from '@angular/core';
import { Serie } from "./series/serie";
import { SERIES } from "./series/series-list";

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  getSeries(): Serie [] {
    return SERIES;
  }
}
