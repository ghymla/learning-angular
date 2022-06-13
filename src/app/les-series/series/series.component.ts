import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';
import { Serie } from "./serie";

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  series: Serie [];

  constructor(private serieService: SerieService) { }

  ngOnInit() {
    this.serieService.getSeriesList().subscribe(
      (series) => this.series = series
    )
  }

}
