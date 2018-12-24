import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterSharedModule } from '../shared/character-shared.module';
import { CharacterListRoutingModule } from './character-list-routing.module';
import { CharacterListComponent } from './character-list.component';

@NgModule({
  declarations: [CharacterListComponent],
  imports: [
    CommonModule,
    CharacterListRoutingModule,
    CharacterSharedModule
  ]
})
export class CharacterListModule { }
