import { Component, OnInit } from '@angular/core';
import { Manga } from './manga'
import { MangaService } from '../manga.service';


@Component({
  selector: 'app-mangas',
  templateUrl: './mangas.component.html',
  styleUrls: ['./mangas.component.scss']
})
export class MangasComponent implements OnInit {
  mangas: Manga [];

  constructor(private mangaService: MangaService) { }

  ngOnInit() {
    this.mangaService.getMangaByName(Manga.name);
    this.mangas = this.mangaService.getMangas();
  }

  selectManga(manga: Manga){
    console.log(`voici l'objet manga: ${manga.name}`)
  }
}
