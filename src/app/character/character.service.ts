// Angular
import { Injectable } from '@angular/core';

import { ApiService } from '../shared/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  characterData$ = this.apiService.characterData$;

  constructor(
    private apiService: ApiService
  ) { }

  setMetadataCards(newCards: string[]): void {
    this.apiService.updateCharacterData({
      metadataCards: newCards
    });
  }

  getLastUsedCharacter(): void {
    this.apiService.getLastUsedCharacter$().subscribe(console.log);
  }
}
