import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerieService } from '../serie.service';
import { Serie } from '../series/serie';

@Component({
  selector: 'app-show-serie',
  templateUrl: './show-serie.component.html',
  styles: [
  ]
})
export class ShowSerieComponent implements OnInit {
  serie: Serie | undefined;

  constructor(
    private serieService: SerieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // je doit récup la serieId grace a activeroute snapshot param id
    const serieId: string | null = this.route.snapshot.paramMap.get('id')

    if (serieId) {
      this.serieService.getSerieById(+serieId).subscribe(
        (serie) => this.serie = serie
      )
    }
  }

}
