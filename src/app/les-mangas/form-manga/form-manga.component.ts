import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MangaService } from '../manga.service';
import { Manga } from '../mangas/manga';

@Component({
  selector: 'app-form-manga',
  templateUrl: './form-manga.component.html',
  styleUrls: ['./form-manga.component.scss']
})
export class FormMangaComponent implements OnInit {
  @Input() manga: Manga;
  isCreateManga: boolean;

  constructor(
    private router: Router,
    private mangaService: MangaService
  ) { }

  ngOnInit(): void {
    // vérification si c'est une creation ou update
    this.isCreateManga = this.router.url.includes('create')
  }

  onSubmit() {
    // je veux que les modif du manga soi faite
    this.mangaService.updateManga(this.manga).subscribe(
      // puis je redirige vers le manga
      () => this.router.navigate(['api/mangas', this.manga.id])
    )

  }
}
