import { episode } from "./episode";

export interface SeriesData {
  Title: string;
  Season: number;
  totalSeasons: number;
  Episodes: episode[];
  Response: boolean
}
