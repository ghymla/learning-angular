import { Component, OnInit } from '@angular/core';
import { MANGAS } from '../mangas/mangas-list'
import { Manga } from '../mangas/manga';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  mangaList: Manga[] = MANGAS;
  selectManga: Manga|undefined;

  constructor() { }

  ngOnInit(): void {
  }

  mangaSelect(value: string){
    const manga: Manga|undefined = this.mangaList.find(Manga => Manga.name === value);
    this.selectManga = manga;
  }
}
