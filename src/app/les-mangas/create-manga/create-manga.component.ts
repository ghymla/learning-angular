import { Component, OnInit } from '@angular/core';
import { Manga } from '../mangas/manga';

@Component({
  selector: 'app-create-manga',
  template: `
    <h3 class="title"> Create your Manga !!</h3>
    <app-form-manga [manga]="manga"></app-form-manga>
  `,
  styles: [
  ]
})
export class CreateMangaComponent implements OnInit {
  manga: Manga;

  ngOnInit() {
    this.manga = new Manga();
  }

}
