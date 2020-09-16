import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { repositoryUrl } from './repository-url';
import { SeriesData } from '../models/seriesData';
import { EpisodeInfo } from '../models/episodeInfo';
import { SeriesInfo } from '../models/seriesInfo';

@Injectable({
  providedIn: 'root',
})
export class ImdbApiService {
  private API_KEY = environment.API_KEY;

  constructor(private httpClient: HttpClient) {}

  private getRequest<T>(url, p?) {
    if (p) {
      const params = new HttpParams({
        fromObject: { apikey: this.API_KEY, ...p },
      });
      return this.httpClient.get<T>(url, { params });
    } else {
      const params = new HttpParams({ fromObject: { apikey: this.API_KEY } });
      return this.httpClient.get<T>(url, { params });
    }
  }
  public getSeriesInfo(t: string) {
    return this.getRequest<SeriesInfo>(repositoryUrl.repositoryUrlTVSeries, { t });
  }

  public getSeriesEpisodeList(t: string, season: number) {
    return this.getRequest<SeriesData>(repositoryUrl.repositoryUrlTVSeries, {
      t,
      season,
    });
  }

  public getEpisodeInfo(t: string, season: number, episode: number) {
    return this.getRequest<EpisodeInfo>(repositoryUrl.repositoryUrlTVSeries, {
      t,
      season,
      episode,
    });
  }
}
