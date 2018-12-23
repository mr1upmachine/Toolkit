import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material / Cdk
import {
  MatBadgeModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatRippleModule
} from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';

// Firebase
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterPageComponent } from './character-page/character-page.component';
import { CharacterService } from './character.service';
import { CharacterCardsComponent } from './character-page/character-cards/character-cards.component';
import { Dnd5eStatFormatPipe } from './shared/dnd5e-stat-format.pipe';
import { Dnd5eStatsComponent } from './character-page/character-cards/character-card-types/dnd5e-stats/dnd5e-stats.component';

@NgModule({
  declarations: [
    CharacterPageComponent,
    CharacterCardsComponent,
    Dnd5eStatFormatPipe,
    Dnd5eStatsComponent
  ],
  imports: [
    CommonModule,

    MatBadgeModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    DragDropModule,

    AngularFirestoreModule,

    FontAwesomeModule,

    CharacterRoutingModule
  ],
  providers: [
    CharacterService
  ]
})
export class CharacterModule { }
