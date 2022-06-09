import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MangaService } from '../manga.service';
import { Manga } from '../mangas/manga';

@Component({
  selector: 'app-edit-manga',
  template: `
    <h3 class = "title"> Bienvenue dans l'édition de votre manga {{ manga?.name }} </h3>
    <app-form-manga *ngIf="manga" [manga]="manga"></app-form-manga>
  `,
  styles: [
  ]
})
export class EditMangaComponent implements OnInit {
  manga: Manga | undefined;

  constructor(
    private route: ActivatedRoute,
    private mangaService: MangaService
  ) { }

  ngOnInit() {
    // récupération de l'id du manga
    const mangaId: string|null = this.route.snapshot.paramMap.get('id')

    // je cherche mon manga qui correspond au mangaId et j'injecte mon objet dans manga
    if (mangaId) {
      this.mangaService.getMangasById(+mangaId).subscribe(
        (manga) => this.manga = manga
      )
    }
  }

}
