import { Injectable } from '@angular/core';

// Firebase
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';

// Rxjs
import { Observable, BehaviorSubject, from } from 'rxjs';
import { filter, take, first } from 'rxjs/operators';

import { AuthService } from '../auth/auth.service';
import { ICharacterFb } from '../character.types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly dbPlayerDoc = this.db.doc(`/users/${this.authService.currentFbUser.uid}`);
  private dbCharacterDoc: AngularFirestoreDocument;
  playerData$ = this.dbPlayerDoc.valueChanges();
  characterData$ = new BehaviorSubject<ICharacterFb>(null);

  constructor(
    private authService: AuthService,
    private db: AngularFirestore,
    private fns: AngularFireFunctions
  ) { }

  // TODO: currently broken
  requestApi<T, U>(funcName: string, data: T): Observable<U> {
    const callable = this.fns.httpsCallable(funcName);
    return callable(data);
  }

  // TODO: Update with partial type
  updatePlayerData(playerData: {}): Observable<void> {
    return from(this.dbPlayerDoc.update(playerData));
  }

  // TODO: change to specify character on call, possible current character mask function
  updateCharacterData(characterData: Partial<ICharacterFb>): Observable<void> {
    return from(this.dbCharacterDoc.update(characterData));
  }

  // TODO: fix typing
  getLastUsedCharacter$(): BehaviorSubject<ICharacterFb> {
    this.playerData$.pipe(
      filter(value => value !== null),
      take(1)
    ).subscribe((value: any) => {
      this.dbCharacterDoc = value.characters[0];
      this.db.doc(value.characters[0]).valueChanges().pipe(
        first()
      ).subscribe(character => {
        this.characterData$.next(character as ICharacterFb);
      });
    });
    return this.characterData$;
  }
}
