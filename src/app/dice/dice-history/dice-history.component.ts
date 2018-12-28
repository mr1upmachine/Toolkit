import { Component } from '@angular/core';
import { DiceApiService } from '../shared/dice-api.service';

@Component({
  selector: 'tk-dice-history',
  templateUrl: './dice-history.component.html',
  styleUrls: ['./dice-history.component.scss']
})
export class DiceHistoryComponent {
  history$ = this.diceApiService.getHistory();

  constructor(
    private diceApiService: DiceApiService
  ) { }

}
