import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon'


import { HomeComponent } from './home/home.component';
import { LayoutModule } from './../layout/layout.module';
import { SharedModule } from './../shared/shared.module';
import { LeagueOfLegendsService } from './../shared/LeagueOfLegends/league-of-legends.service';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    LayoutModule,
    MatButtonModule,
    ComponentsModule,
    MatDialogModule,
    MatIconModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    LeagueOfLegendsService
  ]
})
export class PagesModule { }
