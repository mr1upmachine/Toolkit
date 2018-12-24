import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatDividerModule,
  MatRippleModule
} from '@angular/material';

import { CharacterSharedModule } from '../shared/character-shared.module';
import { CharacterListRoutingModule } from './character-list-routing.module';
import { CharacterListComponent } from './character-list.component';

@NgModule({
  declarations: [CharacterListComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatRippleModule,
    CharacterListRoutingModule,
    CharacterSharedModule
  ]
})
export class CharacterListModule { }
