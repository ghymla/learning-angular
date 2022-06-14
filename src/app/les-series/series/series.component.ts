import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SerieService } from '../serie.service';
import { Serie } from "./serie";

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  series: Serie [];

  constructor(
      private serieService: SerieService,
      private route: Router
    ) { }

  ngOnInit() {
    this.serieService.getSeriesList().subscribe(
      (series) => this.series = series
    )
  }

  goToShowSerie(serie: Serie) {
    this.route.navigate(['show-serie', serie.id])
  }

  addSerie() {
    this.route.navigate(['create-serie'])
  }
}
