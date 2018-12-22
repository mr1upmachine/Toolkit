import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import {
  MatCardModule,
  MatProgressSpinnerModule
} from '@angular/material';

// Cdk
import { DragDropModule } from '@angular/cdk/drag-drop';

// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Firebase
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireFunctionsModule, FunctionsRegionToken } from '@angular/fire/functions';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerPageComponent } from './player-page/player-page.component';
import { PlayerService } from './player.service';

@NgModule({
  declarations: [
    PlayerPageComponent
  ],
  imports: [
    CommonModule,

    MatCardModule,
    MatProgressSpinnerModule,
    DragDropModule,

    AngularFirestoreModule,
    AngularFireFunctionsModule,

    PlayerRoutingModule
  ],
  providers: [
    { provide: FunctionsRegionToken, useValue: 'us-central1' },
    PlayerService
  ]
})
export class PlayerModule { }
