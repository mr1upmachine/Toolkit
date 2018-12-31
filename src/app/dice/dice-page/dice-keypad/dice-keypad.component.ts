import {
  Component,
  EventEmitter,
  HostBinding,
  Output,
  Input
} from '@angular/core';

import { faBackspace } from '@fortawesome/pro-regular-svg-icons';

@Component({
  selector: 'tk-dice-keypad',
  templateUrl: './dice-keypad.component.html',
  styleUrls: ['./dice-keypad.component.scss']
})
export class DiceKeypadComponent {
  @HostBinding('class') readonly hostClass = 'flex-column-nowrap p-v-20';

  @Input() disableSubmit: boolean;
  @Output() keyPress = new EventEmitter<string>();
  @Output() parenthesesPress = new EventEmitter();
  @Output() advantagePress = new EventEmitter();
  @Output() disadvantagePress = new EventEmitter();
  @Output() backspacePress = new EventEmitter();
  @Output() submit = new EventEmitter();

  readonly faBackspace = faBackspace;
}
