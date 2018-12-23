// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Firebase
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule, FunctionsRegionToken } from '@angular/fire/functions';

import { AuthService } from '../shared/auth/auth.service';
import { AuthGuard } from '../shared/auth/auth.guard';
import { NoAuthGuard } from './auth/no-auth.guard';

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
    AuthService,
    AuthGuard,
    NoAuthGuard
  ]
})
export class SharedModule { }
