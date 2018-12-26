import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiceService {
  private readonly validationRegex = /(([\+\-\*\/]?(\(*[0-9]*d[0-9]+([\^v][0-9]+)?)+\)*)|(\(*[\+\-\*\/]?[0-9]+\)*))+/g;
  private readonly parenGroupRegex = /\(.+\)/g;
  private readonly diceRegex = /[0-9]*d[0-9]+([\^v][0-9])?/g;
  private readonly diceSymbol = 'd';
  private readonly advSymbol = '^';
  private readonly disSymbol = 'v';

  roll(diceExpr: string): number {
    if (!diceExpr) {
      return NaN;
    }
    return diceExpr.match(this.validationRegex)
             // tslint:disable-next-line:no-eval
             ? eval(this.evalExpr(diceExpr))
             : NaN;
  }

  // TODO: Investigate optimizations through rxjs
  // TODO: Add string building for resolved dice eq
  private evalExpr(expr: string): string {
    const parenGroup = expr.match(this.parenGroupRegex);
    if (parenGroup && parenGroup.length) {
      for (const group of parenGroup) {
        const result = this.evalExpr(group.substring(1, group.length - 1));
        expr = expr.replace(group, `(${result})`);
      }
    }

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
          rollResults.splice(rollResults.length - disValue - 1, rollResults.length - disValue);
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

  private generateRollArray(numDie: number, dieValue: number): number[] {
    const rollResults: number[] = [];
    for (let i = 0; i < numDie; i++) {
      rollResults.push(Math.floor((Math.random() * dieValue) + 1));
    }
    return rollResults.sort((a, b) => a - b);
  }
}
