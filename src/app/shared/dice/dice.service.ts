import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DiceResultDialogComponent } from './dice-result-dialog/dice-result-dialog.component';
import {
  DICE_EXPR_REGEX,
  DICE_REGEX
} from '../utils';

@Injectable({
  providedIn: 'root'
})
export class DiceService {
  private readonly diceExprRegex = DICE_EXPR_REGEX;
  private readonly diceRegex = DICE_REGEX;
  // private readonly parenGroupRegex = PAREN_GROUP_REGEX;
  private readonly diceSymbol = 'd';
  private readonly advSymbol = '^';
  private readonly disSymbol = 'v';

  constructor(public dialog: MatDialog) {}

  roll(diceExpr: string): number {
    if (!diceExpr) {
      return NaN;
    }
    const result: number = this.isValidExpr(diceExpr)
                    // tslint:disable-next-line:no-eval
                    ? eval(this.evalExpr(diceExpr))
                    : NaN;
    this.showResult(result, diceExpr);
    return result;
  }

  isValidExpr(expr: string): boolean {
    const regexMatchResult = expr.match(this.diceExprRegex);
    const singleMatchExists = regexMatchResult && regexMatchResult.length === 1;
    return singleMatchExists && expr.length === regexMatchResult[0].length;
  }

  private evalExpr(expr: string): string {
    const dice = expr.match(this.diceRegex);
    if (dice && dice.length) {
      for (const die of dice) {
        const indexOfD = die.indexOf(this.diceSymbol);
        const numDie = indexOfD
                        ? Number.parseInt(die.substring(0, indexOfD), 10)
                        : 1;
        const indexOfAdv = die.indexOf(this.advSymbol);
        const indexOfDis = die.indexOf(this.disSymbol);

        let rollResults: number[] = [];
        if (indexOfAdv !== -1) {
          const dieValue = Number.parseInt(die.substring(indexOfD + 1, indexOfAdv), 10);
          const advValue = Number.parseInt(die.substring(indexOfAdv + 1), 10);

          rollResults = this.generateRollArray(numDie, dieValue);
          rollResults.splice(0, rollResults.length - advValue);
        } else if (indexOfDis !== -1) {
          const dieValue = Number.parseInt(die.substring(indexOfD + 1, indexOfDis), 10);
          const disValue = Number.parseInt(die.substring(indexOfDis + 1), 10);

          rollResults = this.generateRollArray(numDie, dieValue);
          const rollDisOffset = rollResults.length - disValue;
          rollResults.splice(rollDisOffset - 1, rollDisOffset);
        } else {
          const dieValue = Number.parseInt(die.substring(indexOfD + 1), 10);
          rollResults = this.generateRollArray(numDie, dieValue);
        }

        const rollTotal = rollResults.reduce((a, b) => a + b, 0);
        expr = expr.replace(die, rollTotal.toString());
      }
    }

    return expr;
  }

  // TODO: Investigate optimizations through rxjs
  // TODO: Add string building for resolved dice eq
  // This eval is to parse the string, allows multiplication, division, and parenthesis.
  // private evalExpr(expr: string): string {
  //   const parenGroup = expr.match(this.parenGroupRegex);
  //   if (parenGroup && parenGroup.length) {
  //     for (const group of parenGroup) {
  //       const result = this.evalExpr(group.substring(1, group.length - 1));
  //       expr = expr.replace(group, `(${result})`);
  //     }
  //   }

  //   const dice = expr.match(this.diceRegex);
  //   if (dice && dice.length) {
  //     for (const die of dice) {
  //       const indexOfD = die.indexOf(this.diceSymbol);
  //       const numDie = indexOfD
  //                       ? Number.parseInt(die.substring(0, indexOfD), 10)
  //                       : 1;
  //       const indexOfAdv = die.indexOf(this.advSymbol);
  //       const indexOfDis = die.indexOf(this.disSymbol);

  //       let rollResults: number[] = [];
  //       if (indexOfAdv !== -1) {
  //         const dieValue = Number.parseInt(die.substring(indexOfD + 1, indexOfAdv), 10);
  //         const advValue = Number.parseInt(die.substring(indexOfAdv + 1), 10);

  //         rollResults = this.generateRollArray(numDie, dieValue);
  //         rollResults.splice(0, rollResults.length - advValue);
  //       } else if (indexOfDis !== -1) {
  //         const dieValue = Number.parseInt(die.substring(indexOfD + 1, indexOfDis), 10);
  //         const disValue = Number.parseInt(die.substring(indexOfDis + 1), 10);

  //         rollResults = this.generateRollArray(numDie, dieValue);
  //         const rollDisOffset = rollResults.length - disValue;
  //         rollResults.splice(rollDisOffset - 1, rollDisOffset);
  //       } else {
  //         const dieValue = Number.parseInt(die.substring(indexOfD + 1), 10);
  //         rollResults = this.generateRollArray(numDie, dieValue);
  //       }

  //       const rollTotal = rollResults.reduce((a, b) => a + b, 0);
  //       expr = expr.replace(die, rollTotal.toString());
  //     }
  //   }

  //   return expr;
  // }

  private generateRollArray(numDie: number, dieValue: number): number[] {
    const rollResults: number[] = [];
    for (let i = 0; i < numDie; i++) {
      rollResults.push(Math.floor((Math.random() * dieValue) + 1));
    }
    return rollResults.sort((a, b) => a - b);
  }

  private showResult(result: number | string, detail?: string): void {
    this.dialog.open(DiceResultDialogComponent, {
      minWidth: '150px',
      minHeight: '150px',
      data: {
        result,
        detail
      }
    });
  }
}
