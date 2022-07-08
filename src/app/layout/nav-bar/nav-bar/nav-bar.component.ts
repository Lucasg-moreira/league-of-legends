import { AfterViewInit, Component, OnInit, Output, ViewChild } from '@angular/core';
import { LeagueOfLegendsService } from '../../../shared/LeagueOfLegends/league-of-legends.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  @ViewChild('searchItem') searchNavBar?: any;
  private _championSelected: any;
  private _championId: string = '';

  public listOfAllChampions: any[] = [];
  public championKeyword: string = 'name';

  constructor(private _leagueOfLegendsService: LeagueOfLegendsService) {
    this.getAllChampions();
  }
  ngOnInit() {}
  onSearchCharacter() {
    let championSelected = this._championSelected[this._championId];
    this._leagueOfLegendsService.selectedChampion.emit(championSelected);
    this.onClear();
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
    let searchBar = this.searchNavBar.query;
    this._championId = '';
    if (searchBar != undefined) {
      this.searchNavBar.query = '';
    }
  }
}
