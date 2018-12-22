// Angular
import { Injectable } from '@angular/core';

// Firebase
import { AngularFirestore } from '@angular/fire/firestore';

import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private readonly dbUserData = this.db.collection('/users').doc(this.authService.currentFbUser.uid);

  playerData$ = this.dbUserData.valueChanges();

  constructor(
    private db: AngularFirestore,
    private authService: AuthService
  ) { }

  setPlayerCards(newCards: string[]) {
    this.dbUserData.update({
      playerCards: newCards
    });
  }
}
