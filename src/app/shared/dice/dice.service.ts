import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiceService {
  private readonly validationRegex = /(([\+\-\*\/]?(\(*[0-9]*d[0-9]+([\^v][0-9]+)?)+\)*)|(\(*[\+\-\*\/]?[0-9]+\)*))+/g;
  private readonly parenGroupRegex = /\(.+\)/g;
  private readonly diceRegex = /[0-9]*d[0-9]+([\^v][0-9])?/g;

  roll(diceExpr: string): number {
    return diceExpr.match(this.validationRegex)
             // tslint:disable-next-line:no-eval
             ? eval(this.evalExpr(diceExpr))
             : NaN;
  }

  evalExpr(expr: string): string {
    if (!expr) {
      return '';
    }

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
        const indexOfD = die.indexOf('d');
        const numDie = indexOfD
                        ? Number.parseInt(die.substring(0, indexOfD), 10)
                        : 1;
        const dieValue = Number.parseInt(die.substring(indexOfD + 1), 10);

        let rollResult = 0;
        for (let i = 0; i < numDie; i++) {
          rollResult += Math.floor((Math.random() * dieValue) + 1);
        }

        expr = expr.replace(die, rollResult.toString());
      }
    }

    return expr;
  }

  // TODO: update with ^ and v syntax to replace a

  // captures expressions w/ validation check
  // ([\+\-\*\/])?(([0-9]*d[0-9]+(a[0-9])?)|[0-9])

  // captures groups w/o paren w/ validation check
  // (([\+\-\*\/])?(([0-9]*d[0-9]+(a[0-9])?)|[0-9]))+

  // captures group w/ paren w/ validation check
  // \((([\+\-\*\/])?(([0-9]*d[0-9]+(a[0-9])?)|[0-9]))+\)|(([\+\-\*\/])?(([0-9]*d[0-9]+(a[0-9])?)|[0-9]))+

  // captures group w/paren w/o validation check
  // \(.+\)
}
