import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar/nav-bar.component';
import {MatInputModule} from '@angular/material/input';

import { AutocompleteLibModule } from 'angular-ng-autocomplete';


@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    AutocompleteLibModule,
    MatInputModule
    ],
  exports: [
    NavBarComponent
  ]
})
export class LayoutModule { }
