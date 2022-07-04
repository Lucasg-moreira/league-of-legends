import { Component, OnInit } from '@angular/core';

import { LeagueOfLegendsService } from './../../shared/LeagueOfLegends/league-of-legends.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private championName: string = '';

  constructor(private _leagueOfLegendsService: LeagueOfLegendsService) {}

  ngOnInit() {
    this.getChampionInformation();
  }

  getChampionInformation() {
    if (this.championName == undefined || this.championName == '') {
      this.getChampionName();
    } else {
      this._leagueOfLegendsService.getChampions(this.championName);
    }
  }
  getChampionName() {
    LeagueOfLegendsService.championName?.subscribe(
      data => this.championName = data
    );
  }
}
