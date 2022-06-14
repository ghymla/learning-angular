import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerieService } from '../serie.service';
import { Serie } from '../series/serie';

@Component({
  selector: 'app-edit-serie',
  template: `
    <h3 class="title"> Editez {{ serie?.name }} </h3>
    <app-form-serie *ngIf="serie" [serie]="serie"></app-form-serie>
  `
})
export class EditSerieComponent implements OnInit {
  serie: Serie | undefined;

  constructor(
    private route: ActivatedRoute,
    private serieService: SerieService
  ) { }

  ngOnInit() {
    const serieId = this.route.snapshot.paramMap.get('id');

    if (serieId) {
      this.serieService.getSerieById(+serieId).subscribe(
        (serie) => this.serie = serie
      )
    }
  }

}
