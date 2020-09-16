import { Component, OnInit } from '@angular/core';
import { ImdbApiService } from '../../services/imdb-api.service';
import { tap } from 'rxjs/operators';
import { episode } from 'src/app/models/episode';
import { EpisodeInfo } from 'src/app/models/episodeInfo';

@Component({
  selector: 'app-series-info',
  templateUrl: './series-info.component.html',
  styleUrls: ['./series-info.component.scss'],
})
export class SeriesInfoComponent implements OnInit {
  listItems: Array<string> = [
    'Planet Earth II',
    'Planet Earth',
    'Band of Brothers',
    'Breaking Bad',
    'Chernobyl',
  ];

  selectedSeries: string = null;
  selectedSeason: number = null;

  public gridData: episode[] = []; //sampleProducts.Episodes;
  public seasons: number[] = [];
  public selectedRow: number[] = [];
  public episodeInfo: EpisodeInfo = null;
  public isOpen = false;

  constructor(private imdbApiService: ImdbApiService) {}

  ngOnInit(): void {}

  getSeriesData(series, season) {
    return this.imdbApiService.getSeriesEpisodeList(series, season);
  }

  seriesSelectionChange(series: any) {
    this.seasons = null;
    this.gridData = [];
    this.selectedSeries = series;
    console.log(series);
    this.getSeriesData(series, 1)
      .pipe(
        tap((seriesData) => {
          let tmp = [...Array(+seriesData.totalSeasons).keys()];
          this.seasons = tmp.map((a) => ++a);
        })
      )
      .subscribe();

    if (this.selectedSeason != null) {
      this.getSeriesData(this.selectedSeries, this.selectedSeason)
        .pipe(tap((epList) => (this.gridData = epList.Episodes)))
        .subscribe();
    }
  }

  seasonSelectionChange(seasonNumber: any) {
    this.selectedSeason = seasonNumber;
    this.getSeriesData(this.selectedSeries, seasonNumber)
      .pipe(tap((epList) => (this.gridData = epList.Episodes)))
      .subscribe();
  }

  cellClick(cell: any) {
    this.imdbApiService
      .getEpisodeInfo(
        this.selectedSeries,
        this.selectedSeason,
        cell.dataItem.Episode
      )
      .pipe(
        tap((epInfo) => {
          if (epInfo) {
            this.episodeInfo = epInfo;
            this.isOpen = true;
          }
        })
      )
      .subscribe();
  }

  dialogClosing(val) {
    this.isOpen = val;
  }
}
