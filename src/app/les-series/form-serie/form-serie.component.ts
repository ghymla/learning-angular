import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SerieService } from '../serie.service';
import { Serie } from '../series/serie';

@Component({
  selector: 'app-form-serie',
  templateUrl: './form-serie.component.html',
  styleUrls: ['./form-serie.component.scss']
})
export class FormSerieComponent implements OnInit {
  @Input() serie: Serie;
  isCreateSerie: boolean;

  constructor(
    private serieService: SerieService,
    private route: Router
  ) { }

  ngOnInit() {
    this.isCreateSerie = this.route.url.includes('create')
  }

  onSubmit() {
    if (this.isCreateSerie) {
      this.serieService.createSerie(this.serie).subscribe(
        () => this.route.navigate(['index'])
      )

    } else {
      this.serieService.updateSerie(this.serie).subscribe(
        () => this.route.navigate(['show-serie', this.serie.id])
      )
    }

  }

}
