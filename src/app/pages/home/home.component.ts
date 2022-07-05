import { Component, OnInit } from '@angular/core';
import { Champions } from 'src/app/models/Champions';

import { LeagueOfLegendsService } from './../../shared/LeagueOfLegends/league-of-legends.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private championName: string = '';
  public num:number = 0;
  public champion: Champions = new Champions();
  constructor(private _leagueOfLegendsService: LeagueOfLegendsService) {}

  ngOnInit() {
    this.getChampionInformation();
  }

  getChampionInformation() {
    if (this.championName == undefined || this.championName == '') {
      this.getChampionName();
    } else {
      this._leagueOfLegendsService
        .getChampionsByName(this.championName)
        .subscribe((champion) => {
          this.champion.id = champion.data[this.championName].id
          this.champion.textTitle = champion.data[this.championName].title
        });
        this.getChampionPicture();
    }
  }
  getChampionName() {
    LeagueOfLegendsService.championName?.subscribe(
      (data) => (this.championName = data)
    );
  }
  getChampionPicture() {
    this._leagueOfLegendsService.getImageChampions(this.championName).subscribe(data => this.champion.fullPicture = data)
  }

  nextSplashImage()  {
    this.num++
    console.log(this.num)
  }

  previousSplashImage() {
    if(this.num <= 0) {
      this.num = 0;
    } else {
      this.num--
    }console.log(this.num)
  }
}
