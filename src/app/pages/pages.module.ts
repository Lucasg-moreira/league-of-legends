import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueOfLegendsService } from './../shared/LeagueOfLegends/league-of-legends.service';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from './../layout/layout.module';
import { SharedModule } from './../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    LayoutModule,
    MatButtonModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    LeagueOfLegendsService
  ]
})
export class PagesModule { }
