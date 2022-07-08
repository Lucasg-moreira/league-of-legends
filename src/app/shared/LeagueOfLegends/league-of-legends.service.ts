import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LeagueOfLegendsService {
  private readonly API_URL = environment.API_URL;
  private readonly API_SPLASH_ART = environment.SPLASH_URL;
  private readonly API_ALL_CHAMPIONS = environment.ALL_CHAMPIONS_URL;
  public selectedChampion: any = new EventEmitter<any>();

  constructor(private http: HttpClient) { }

  getChampionsByName(name: string) {
    return this.http.get<any>(`${this.API_URL}/champion/${name}.json`)
  }
  getAllChampions() {
    return this.http.get<any>(`${this.API_ALL_CHAMPIONS}`)
  }
  getImageChampions(name: string) {
    return this.http.get<any>(`${this.API_SPLASH_ART}/${name}_0.jpg`)
  }
}
