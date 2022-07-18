import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LeagueOfLegendsService } from './../../shared/LeagueOfLegends/league-of-legends.service';
import { Component, Inject, OnInit } from '@angular/core';


import { Champions } from 'src/app/models/Champions';
@Component({
  selector: 'app-show-lore',
  templateUrl: './show-lore.component.html',
  styleUrls: ['./show-lore.component.css']
})
export class ShowLoreComponent implements OnInit{
  public champion: Champions = new Champions;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _matDialogRef: MatDialogRef<ShowLoreComponent>) { }

  ngOnInit() {
    this.champion = this.data;
  }

}
