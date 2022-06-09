import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MangaService } from '../manga.service';
import { Manga } from '../mangas/manga';

@Component({
  selector: 'app-show-manga',
  templateUrl: './show-manga.component.html',
  styles: [
  ]
})
export class ShowMangaComponent implements OnInit {
  manga: Manga | undefined;

  constructor(
    private mangaService: MangaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const mangaId: string | null = this.route.snapshot.paramMap.get('id')

    if (mangaId) {
      this.mangaService.getMangasById(+mangaId).subscribe(
        manga => this.manga = manga
      );
    }
  }

  editManga(manga: Manga) {
    this.router.navigate(['edit-manga', manga.id])
  }

}
