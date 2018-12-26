import { Component, HostBinding } from '@angular/core';
import { DiceService } from 'src/app/shared/dice/dice.service';

@Component({
  selector: 'tk-dice-page',
  templateUrl: './dice-page.component.html',
  styleUrls: ['./dice-page.component.scss']
})
export class DicePageComponent {
  @HostBinding('class') readonly hostClass = 'flex-stretch flex-column-nowrap flex-center';

  diceEq: string;
  result: number;

  constructor(
    private diceService: DiceService
  ) { }

  roll(): void {
    this.result = this.diceService.roll(this.diceEq);
  }

}
