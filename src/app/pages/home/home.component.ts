import { Component, OnInit } from '@angular/core';
import { Champions } from 'src/app/models/Champions';
import { environment } from 'src/environments/environment.prod';

import { LeagueOfLegendsService } from './../../shared/LeagueOfLegends/league-of-legends.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public selectedChampion: any;
  public champion: Champions = new Champions();
  public championPicture = environment.SPLASH_URL;
  picture: any;
  public num: number = 0;
  constructor(private _leagueOfLegendsService: LeagueOfLegendsService) {}

  ngOnInit() {
    this.getSelectedChampion();
  }
  getSelectedChampion() {
    this._leagueOfLegendsService.selectedChampion.subscribe((data: any) => {
      this.selectedChampion = data;
      this.champion.id = data.id;
      this.champion.fullPicture = data.image.full;
      this.champion.name = data.name;
      this.champion.textTitle = data.title;
      this.getChampionByName();
    });
  }
  nextSplashImage() {
    this.num++;
    console.log(this.num);
  }
  previousSplashImage() {
    if (this.num <= 0) {
      this.num = 0;
    } else {
      this.num--;
    }
    console.log(this.num);
  }
  getChampionByName() {
    this._leagueOfLegendsService
      .getChampionsByName(this.champion.id)
      .subscribe((data) => {
        this.picture = data.data[this.champion.id].image.full;
      });
  }
}
