import { Component, OnInit } from '@angular/core';
import { Serie } from '../series/serie';

@Component({
  selector: 'app-create-serie',
  template: `
    <h2 class ="title"> Ajoutez votre Serie préférée</h2>
    <app-form-serie [serie]="serie"></app-form-serie>
  `
})
export class CreateSerieComponent implements OnInit {
  serie: Serie;

  ngOnInit() {
    this.serie = new Serie();
  }
}
