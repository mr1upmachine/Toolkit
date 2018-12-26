import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material / Cdk
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatRippleModule
} from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';

// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CharacterDetailRoutingModule } from './character-detail-routing.module';
import { CharacterSharedModule } from '../shared/character-shared.module';
import { CharacterDetailComponent } from './character-detail.component';
import { CharacterCardsComponent } from './character-cards/character-cards.component';
import { Dnd5eStatsComponent } from './character-cards/character-card-types/dnd5e-stats/dnd5e-stats.component';

@NgModule({
  declarations: [
    CharacterDetailComponent,
    CharacterCardsComponent,
    Dnd5eStatsComponent
  ],
  imports: [
    CommonModule,

    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    DragDropModule,

    FontAwesomeModule,

    CharacterDetailRoutingModule,
    CharacterSharedModule
  ]
})
export class CharacterDetailModule { }
