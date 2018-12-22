// Angular
import { Injectable } from '@angular/core';

// Firebase
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';

import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private readonly dbUserData = this.db.collection('/users').doc(this.authService.currentFbUser.uid);

  playerData$ = this.dbUserData.valueChanges();

  constructor(
    private db: AngularFirestore,
    private fns: AngularFireFunctions,
    private authService: AuthService
  ) { }

  setPlayerCards(newCards: string[]) {
    console.log('this.fns.functions: ', this.fns.functions);
    this.dbUserData.update({
      playerCards: newCards
    });
  }

  testApi() {
    const callable = this.fns.httpsCallable('helloWorld');
    return callable({ name: 'some-data' });
  }
}
