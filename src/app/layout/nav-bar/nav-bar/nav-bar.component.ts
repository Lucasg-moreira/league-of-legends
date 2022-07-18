import { Component, ViewChild } from '@angular/core';
import { LeagueOfLegendsService } from '../../../shared/LeagueOfLegends/league-of-legends.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  @ViewChild('searchItem') searchNavBar?: any;
  private _championSelected: any;
  private _championId: string = '';

  public listOfAllChampions: any[] = [];
  public championKeyword: string = 'name';

  constructor(private _leagueOfLegendsService: LeagueOfLegendsService) {
    this.getAllChampions();

  }
  onSearchCharacter() {
    let championSelected = this._championSelected[this._championId];
    if(this.searchNavBar.query == '' || undefined){
      championSelected = undefined;
      this._leagueOfLegendsService.selectedChampion.emit(championSelected);

    }else {
      this._leagueOfLegendsService.selectedChampion.emit(championSelected);
      this.onClear();
    }
  }
  getAllChampions() {
    this._leagueOfLegendsService.getAllChampions().subscribe((data) => {
      let dataConvert = Object.values(data.data);
      this.listOfAllChampions = dataConvert;
      this._championSelected = data.data;
    });
  }
  onSelectedChampionAutoComplete(event: any) {
    this._championId = event.id;
  }
  onClear() {
    this._championId = '';
    if ( this.searchNavBar.query != undefined) {
      this.searchNavBar.query = '';
    }
  }
}
