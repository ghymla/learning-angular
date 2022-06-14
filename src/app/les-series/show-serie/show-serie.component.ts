import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute,
    private router: Router
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

  editSerie(serie: Serie) {
    this.router.navigate(['edit-serie', serie.id])
  }

  deleteSerie(serie: Serie) {
    this.serieService.deleteSerie(serie.id).subscribe(
      () => this.router.navigate(['index'])
    )
  }
}
