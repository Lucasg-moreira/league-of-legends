import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { map, pipe } from 'rxjs';
import { LeagueOfLegendsService } from '../../../shared/LeagueOfLegends/league-of-legends.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit, AfterViewInit {
  @ViewChild('searchItem') searchNavBar?: any;
  private _championName: string = '';

  public listOfAllChampions: any[] = [];
  public championKeyword: string = 'name';

  constructor(private _leagueOfLegendsService: LeagueOfLegendsService) {
    this.getAllChampions();
  }
  ngOnInit() {}
  ngAfterViewInit(): void {}

  onSearchCharacter() {
    this.getChampions();
    this.onClear();
    LeagueOfLegendsService.championName?.emit(this._championName);
  }
  getChampions() {
    this._championName = this.searchNavBar.query;
  }
  getAllChampions() {
    this._leagueOfLegendsService.getAllChampions().subscribe((data) => {
      let dataConvert = Object.values(data.data);
      this.listOfAllChampions = dataConvert;
    });
  }
  onClear() {
    let searchBar = this.searchNavBar.query;
    if (searchBar != undefined) {
      this.searchNavBar.query = '';
    }
  }
}
