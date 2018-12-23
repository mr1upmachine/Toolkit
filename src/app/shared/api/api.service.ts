import { Injectable } from '@angular/core';

// Firebase
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';

// Rxjs
import { Observable } from 'rxjs';

import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly dbPlayerData = this.db.collection('/users').doc(this.authService.currentFbUser.uid);
  playerData$ = this.dbPlayerData.valueChanges();

  constructor(
    private authService: AuthService,
    private db: AngularFirestore,
    private fns: AngularFireFunctions
  ) { }

  // Currently broken
  requestApi<T, U>(funcName: string, data: T): Observable<U> {
    const callable = this.fns.httpsCallable(funcName);
    return callable(data);
  }

  updatePlayerData(playerData: {}): void { // update with partial type
    this.dbPlayerData.update(playerData);
  }
}
