import { Component, OnInit } from '@angular/core';
import { MANGAS } from './mangas-list';

@Component({
  selector: 'app-mangas',
  templateUrl: './mangas.component.html',
  styleUrls: ['./mangas.component.scss']
})
export class MangasComponent implements OnInit {
  mangas = MANGAS

  constructor() { }

  ngOnInit(): void {
  }

}
