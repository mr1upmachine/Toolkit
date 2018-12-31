// Angular
import { Injectable } from '@angular/core';

// Firebase
import { DocumentReference } from '@angular/fire/firestore';

// Rxjs
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from 'src/app/shared/api/api.service';
import { ICharacterFb } from 'src/app/shared/character.types';

@Injectable({
  providedIn: 'root'
})
export class CharacterApiService {
  id: string; // TODO: find better abstraction

  constructor(
    private apiService: ApiService
  ) { }

  // TODO: find better abstraction
  setMetadataCards(newCards: string[]): void {
    this.apiService.updateCharacterData(
      this.id,
      {
        metadataCards: newCards
      }
    );
  }

  getCharacterData$(id = this.id): Observable<any> {
    return this.apiService.getCharacterData$(id);
  }

  // TODO: Update with partial type
  setCharacterData(characterData: Partial<ICharacterFb>, id = this.id): Observable<void> {
    return this.apiService.setCharacterData(id, characterData);
  }

  // TODO: Update with partial type
  updateCharacterData(characterData: Partial<ICharacterFb>, id = this.id): Observable<void> {
    return this.apiService.updateCharacterData(id, characterData);
  }

  getAllCharacters(): any {
    return this.apiService.getAllCharacters();
  }

  getAllCharactersByCurrentPlayer(): any {
    return this.apiService.dbCurrentUser.collection('characters').get().pipe(
      map(querySnapshot => {
        const characterList = [];
        querySnapshot.forEach(doc => {
          characterList.push(doc.data());
        });
        return characterList;
      })
    );
  }

  setLastViewedCharacter(characterId: string): void {
    this.apiService.updatePlayerData({
      lastViewedCharacter: this.apiService.dbCharactersCollection.doc(characterId).ref
    });
  }

  getLastViewedCharacter(): Observable<DocumentReference> {
    return this.apiService.getPlayerData$().pipe(map(user => user.lastViewedCharacter));
  }
}
