// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatDialogModule } from '@angular/material';

// Firebase
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule, FunctionsRegionToken } from '@angular/fire/functions';

import { ApiService } from './api/api.service';
import { AuthService } from '../shared/auth/auth.service';
import { AuthGuard } from '../shared/auth/auth.guard';
import { NoAuthGuard } from './auth/no-auth.guard';
import { DiceService } from './dice/dice.service';
import { DiceResultDialogComponent } from './dice/dice-result-dialog/dice-result-dialog.component';
import { TimeDifferencePipe } from './time-difference-pipe/time-difference.pipe';

@NgModule({
  declarations: [
    DiceResultDialogComponent,
    TimeDifferencePipe
  ],
  entryComponents: [DiceResultDialogComponent],
  exports: [
    TimeDifferencePipe
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule
  ],
  providers: [
    { provide: FunctionsRegionToken, useValue: 'us-central1' },
    ApiService,
    AuthService,
    AuthGuard,
    NoAuthGuard,
    DiceService
  ]
})
export class SharedModule { }
