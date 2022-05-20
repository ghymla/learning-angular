import { Component, OnInit } from '@angular/core';
import { MANGAS } from './mangas-list';
import { Manga } from './manga'


@Component({
  selector: 'app-mangas',
  templateUrl: './mangas.component.html',
  styleUrls: ['./mangas.component.scss']
})
export class MangasComponent implements OnInit {
  mangas = MANGAS;


  constructor() { }

  ngOnInit(): void {
    this.selectManga(this.mangas[0])
  }

  selectManga(manga: Manga){
    console.log(`voici l'objet manga: ${manga.name}`)
  }
}
