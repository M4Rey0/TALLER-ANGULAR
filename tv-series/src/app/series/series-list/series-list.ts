import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-series-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './series-list.html',
  styleUrls: ['./series-list.css']
})
export class SeriesListComponent implements OnInit {
  series: Array<Serie> = [];
  promedio: number = 0;
  selectedSerie: Serie | null = null; 

  constructor(private serieService: SerieService) { }

  ngOnInit() {
    this.getSeries();
  }

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.calcularPromedio(series);
    });
  }

  calcularPromedio(series: Serie[]) {
    let total = 0;
    series.forEach(serie => total += serie.seasons);
    this.promedio = total / series.length;
  }

  onSelected(serie: Serie): void {
    this.selectedSerie = serie;
  }
}