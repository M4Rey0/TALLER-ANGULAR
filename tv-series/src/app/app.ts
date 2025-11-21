import { Component } from '@angular/core';
import { SeriesListComponent } from './series/series-list/series-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SeriesListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'tv-series';
}