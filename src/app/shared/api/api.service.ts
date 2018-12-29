import { Injectable } from '@angular/core';

// Firebase
import { AngularFirestore, QueryFn } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';

// Rxjs
import { Observable, from } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { ICharacterFb } from '../character.types';

import { map } from 'rxjs/operators';

// TODO: Better abstract out this service to be a search for fb docs
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly dbCharactersCollection = this.db.collection('characters');
  readonly dbUsersCollection = this.db.collection('users');
  readonly dbCurrentUser = this.authService.dbCurrentUser;

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

  uniqueId(): string {
    return this.db.createId();
  }

  // TODO: fix typing
  getPlayerData$(): Observable<any> {
    return this.dbCurrentUser.valueChanges();
  }

  // TODO: Update with partial type
  setPlayerData(playerData: {}): Observable<void> {
    return from(this.dbCurrentUser.set(playerData));
  }

  // TODO: Update with partial type
  updatePlayerData(playerData: {}): Observable<void> {
    return from(this.dbCurrentUser.update(playerData));
  }

  // TODO: fix typing
  getCharacterData$(id: string): Observable<any> {
    return this.dbCharactersCollection.doc(id).valueChanges();
  }

  // TODO: Update with partial type
  setCharacterData(id: string, characterData: Partial<ICharacterFb>): Observable<void> {
    return from(this.dbCharactersCollection.doc(id).set(characterData));
  }

  // TODO: Update with partial type
  updateCharacterData(id: string, characterData: Partial<ICharacterFb>): Observable<void> {
    return from(this.dbCharactersCollection.doc(id).update(characterData));
  }

  // TODO: fix typing
  getAllCharacters(): Observable<any> {
    return this.dbCharactersCollection.get().pipe(
      map(querySnapshot => {
        const queryList = [];
        querySnapshot.forEach(doc => {
          queryList.push(doc.data());
        });
        return queryList;
      })
    );
  }

  // TODO: fix typing
  // getAllCharactersWhere(query: QueryFn): Observable<any> {
  //   return this.dbCharactersCollection.get().pipe(
  //     fbDataMap()
  //   );
  // }
}
