import { Component, HostBinding, OnInit } from '@angular/core';
import { AppNavService } from 'src/app/app-nav/app-nav.service';
import { DiceService } from 'src/app/shared/dice/dice.service';
import { DiceApiService } from '../shared/dice-api.service';

@Component({
  selector: 'tk-dice-page',
  templateUrl: './dice-page.component.html',
  styleUrls: ['./dice-page.component.scss']
})
export class DicePageComponent implements OnInit {
  @HostBinding('class') readonly hostClass = 'flex-stretch flex-column-nowrap p-h-20';

  diceEq = '';
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
    this.result = this.diceService.roll(this.diceEq);
    this.diceApiService.addToHistory(this.result, this.diceEq);
  }

  keyPressed(value: string): void {
    this.diceEq += value;
  }

  parenthesesPressed(): void {

  }

  advantagePressed(): void {

  }

  disadvantagePressed(): void {

  }

  backspacePressed(): void {
    this.diceEq = this.diceEq.slice(0, -1);
  }
}
