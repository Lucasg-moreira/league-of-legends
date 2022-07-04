import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueOfLegendsService } from './LeagueOfLegends/league-of-legends.service';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule
  ],
  providers: [
    LeagueOfLegendsService
  ]
})
export class SharedModule { }
