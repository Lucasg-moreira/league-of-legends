import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Champions } from 'src/app/models/Champions';
import { environment } from 'src/environments/environment.prod';

import { LeagueOfLegendsService } from './../../shared/LeagueOfLegends/league-of-legends.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('img') img!: HTMLImageElement;
  public linkUrl = new Image();
  public selectedChampion: any;
  public picture?: string;
  public champion: Champions = new Champions();
  public championPicture = environment.SPLASH_URL;
  public num: number = 0;
  constructor(private _leagueOfLegendsService: LeagueOfLegendsService) {
    this.getSelectedChampion();
  }
  ngOnInit() {}
  getSelectedChampion() {
    this._leagueOfLegendsService.selectedChampion.subscribe((data: any) => {
      this.selectedChampion = data;
      this.addInformations(data);
      this.getChampionByName();
    });
  }
  getChampionByName() {
    this._leagueOfLegendsService
      .getChampionsByName(this.champion.id)
      .subscribe((data) => {
        this.picture = data.data[this.champion.id].image.full;
        this.champion.skins = data.data[this.champion.id].skins;

      });
  }
  addInformations(data: any) {
    this.champion.id = data.id;
    this.champion.name = data.name;
    this.champion.textTitle = data.title;
    this.champion.blurb = data.blurb;
    this.champion.lore = data.lore;
    this.champion.skins = data.skins;
    this.champion.tags = data.tags;
  }
}
