import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { Champions } from './../../../models/Champions';
import { LeagueOfLegendsService } from './../../../shared/LeagueOfLegends/league-of-legends.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit, AfterViewInit {
  @ViewChild('searchItem') searchNavBar?: any;
  public resultChampions: any;
  public champions!: Champions;
  private championName!: string;


  public campeao: any;
  constructor(private _leagueOfLegendsService: LeagueOfLegendsService) {}
  ngOnInit(): void {}
  ngAfterViewInit(): void {}

  onSearchCharacter() {
    this.getChampions();
    LeagueOfLegendsService.championName?.emit(this.championName);
    this.onClear();
  }
  getChampions() {
    this.championName = this.searchNavBar.nativeElement.value;
    this.campeao = this._leagueOfLegendsService.getChampions(this.championName);
  }
  onClear() {
    let searchBar = this.searchNavBar.nativeElement.value;
    if (searchBar != undefined) {
      this.searchNavBar.nativeElement.value = '';
    }
  }
}
