import { Component, OnInit } from '@angular/core';
import { MangaService } from '../les-mangas/manga.service';
import { Manga } from '../les-mangas/mangas/manga';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  mangaList: Manga [];
  selectManga: Manga|undefined;

  constructor(private mangaSerice: MangaService) { }

  ngOnInit() {
    this.mangaList = this.mangaSerice.getMangas()
  }

  mangaSelect(value: string){
    this.selectManga = this.mangaSerice.getMangaByName(value.toLowerCase());
  }
}
