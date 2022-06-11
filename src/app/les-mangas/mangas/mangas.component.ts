import { Component, OnInit } from '@angular/core';
import { Manga } from './manga'
import { MangaService } from '../manga.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mangas',
  templateUrl: './mangas.component.html',
  styleUrls: ['./mangas.component.scss']
})
export class MangasComponent implements OnInit {
  mangas: Manga [];

  constructor(
    private mangaService: MangaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.mangaService.getMangaByName(Manga.name);
    this.mangaService.getMangas().subscribe(
      mangasList => this.mangas = mangasList
    )
  }

  goToManga(manga: Manga){
    this.router.navigate(['show-manga', manga.id])
  }

  addManga() {
    this.router.navigate(['create-manga'])
  }
}
