import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShowLoreComponent } from 'src/app/components/show-lore/show-lore.component';

import { Champions } from 'src/app/models/Champions';
import { LeagueOfLegendsService } from './../../shared/LeagueOfLegends/league-of-legends.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public champion: Champions = new Champions();
  public index: number = 1;
  public splashArt: number = 0;
  constructor(private _leagueOfLegendsService: LeagueOfLegendsService,
    private _dialog: MatDialog,
    ) {
    this.getSelectedChampion();
  }
  getSelectedChampion() {
    this._leagueOfLegendsService.selectedChampion.subscribe((data: any) => {
      this.addInformations(data);
      this.getChampionByName();
      this.reset();
    });
  }
  getChampionByName() {
    this._leagueOfLegendsService
      .getChampionsByName(this.champion.id)
      .subscribe((data) => {
        this.champion.skins = data.data[this.champion.id].skins;
        this.champion.lore = data.data[this.champion.id].lore;
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
  next() {
    if (this.index >= this.champion.skins.length) {
      this.index = 1;
      this.splashArt = 0;
    } else {
      let arr = this.champion.skins[this.index].num;
      this.index++;
      this.splashArt = arr;
    }
  }
  previous() {
    this.index--;
    if(this.index < 0) {
      this.index = 1;
      this.splashArt = 0;
    }else {
      this.splashArt = this.champion.skins[this.index].num;
    }
  }
  reset() {
    this.index = 1;
    this.splashArt = 0;
  }
  showChampionLore()  {
    let dialogRef = this._dialog.open(ShowLoreComponent, {
      height: '300px',
      width: '600px',
      data: this.champion
    });
  }
}
