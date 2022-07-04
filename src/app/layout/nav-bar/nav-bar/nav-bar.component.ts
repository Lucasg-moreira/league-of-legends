import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { LeagueOfLegendsService } from '../../../shared/LeagueOfLegends/league-of-legends.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit, AfterViewInit {
  @ViewChild('searchItem') searchNavBar?: any;
  private _championName!: string;
  constructor(private _leagueOfLegendsService: LeagueOfLegendsService) {}
  ngOnInit(): void {}
  ngAfterViewInit(): void {}

  onSearchCharacter() {
    this.getChampions();
    this.onClear();
    LeagueOfLegendsService.championName?.emit(this._championName);
  }
  getChampions() {
    this._championName = this.searchNavBar.nativeElement.value;
    this._leagueOfLegendsService.getChampions(this._championName);
  }
  onClear() {
    let searchBar = this.searchNavBar.nativeElement.value;
    if (searchBar != undefined) {
      this.searchNavBar.nativeElement.value = '';
    }
  }
}
