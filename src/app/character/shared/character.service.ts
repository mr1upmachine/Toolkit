// Angular
import { Injectable } from '@angular/core';

// Rxjs
import { Observable } from 'rxjs';

import { ApiService } from '../../shared/api/api.service';
import { ICharacterFb } from 'src/app/shared/character.types';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
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
}
