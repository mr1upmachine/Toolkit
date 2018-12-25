// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Firebase
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule, FunctionsRegionToken } from '@angular/fire/functions';

import { ApiService } from './api/api.service';
import { AuthService } from '../shared/auth/auth.service';
import { AuthGuard } from '../shared/auth/auth.guard';
import { NoAuthGuard } from './auth/no-auth.guard';
import { DiceService } from './dice/dice.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
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
