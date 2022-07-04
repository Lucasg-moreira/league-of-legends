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
  static championName? = new EventEmitter<string>();

  constructor(private http: HttpClient) { }

  getChampions(name: string) {
    return this.http.get<any>(`${this.API_URL}/champion/${name}.json`).subscribe(
      champion => console.log(champion.data[name])
    )
  }
  getImageChampions(name: string)  {
    return this.http.get<any>(`${this.API_SPLASH_ART}/${name}_0.jpg`).pipe(map(data => {
      console.log(data);
      return data;
    }))
  }
}
