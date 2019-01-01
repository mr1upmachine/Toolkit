import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppNavService } from '@tk/app/app-nav/app-nav.service';
import { DiceService } from '@tk/shared/dice/dice.service';
import { DiceApiService } from '../shared/dice-api.service';
import { validateDiceExpression } from '@tk/utils/formsCustomValidators';

@Component({
  selector: 'tk-dice-page',
  templateUrl: './dice-page.component.html',
  styleUrls: ['./dice-page.component.scss']
})
export class DicePageComponent implements OnInit {
  @HostBinding('class') readonly hostClass = 'flex-stretch flex-column-nowrap p-h-20';

  diceEq = new FormControl('', validateDiceExpression);
  result: number;

  constructor(
    private appNavService: AppNavService,
    private diceService: DiceService,
    private diceApiService: DiceApiService
  ) { }

  ngOnInit(): void {
    this.appNavService.setToolbarActionMenu([
      {
        text: 'History',
        route: '/dice/history'
      }
    ]);
}

  roll(): void {
    this.result = this.diceService.roll(this.diceEq.value);
    if (this.result !== NaN) {
      this.diceApiService.addToHistory(this.result, this.diceEq.value);
    }
  }

  keyPressed(value: string): void {
    this.diceEq.setValue(this.diceEq.value + value);
  }

  advantagePressed(): void {

  }

  disadvantagePressed(): void {

  }

  backspacePressed(): void {
    this.diceEq.setValue(this.diceEq.value.slice(0, -1));
  }
}
