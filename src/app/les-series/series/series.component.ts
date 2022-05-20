import { Component, OnInit } from '@angular/core';
import { SERIES } from './series-list'

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  series = SERIES

  constructor() { }

  ngOnInit(): void {
  }

}
