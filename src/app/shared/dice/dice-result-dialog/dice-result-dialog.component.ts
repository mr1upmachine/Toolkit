import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IDiceResult } from '../dice.types';

@Component({
  selector: 'tk-dice-result-dialog',
  templateUrl: './dice-result-dialog.component.html',
  styleUrls: ['./dice-result-dialog.component.scss']
})
export class DiceResultDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DiceResultDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public rollResult: IDiceResult
  ) {}

}
