import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ShowLoreComponent } from './show-lore/show-lore.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ShowLoreComponent
  ],
  exports: [
    ShowLoreComponent
  ]
})
export class ComponentsModule { }
