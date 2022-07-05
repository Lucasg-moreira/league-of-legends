import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar/nav-bar.component';

import { AutocompleteLibModule } from 'angular-ng-autocomplete';


@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    AutocompleteLibModule
    ],
  exports: [
    NavBarComponent
  ]
})
export class LayoutModule { }
