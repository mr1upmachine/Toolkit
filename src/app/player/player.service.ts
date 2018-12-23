// Angular
import { Injectable } from '@angular/core';

import { ApiService } from '../shared/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerData$ = this.apiService.playerData$;

  constructor(
    private apiService: ApiService
  ) { }

  setPlayerCards(newCards: string[]): void {
    this.apiService.updatePlayerData({
      playerCards: newCards
    });
  }
}
