import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Firebase
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { Dnd5eStatFormatPipe } from './dnd5e-stat-format.pipe';
import { CharacterService } from './character.service';
import { CharacterExistsGuard } from './character-exists.guard';
import { RedirectToLastViewedCharacterGuard } from './redirect-to-last-viewed-character.guard';

@NgModule({
  imports: [
    CommonModule,
    AngularFirestoreModule
  ],
  exports: [Dnd5eStatFormatPipe],
  declarations: [Dnd5eStatFormatPipe],
  providers: [
    CharacterService,
    CharacterExistsGuard,
    RedirectToLastViewedCharacterGuard
  ]
})
export class CharacterSharedModule { }
