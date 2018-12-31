import { AbstractControl } from '@angular/forms';
import { DICE_EXPR_REGEX } from './regex';

// tslint:disable-next-line:typedef
export function validateDiceExpression(c: AbstractControl) {
  const EMAIL_REGEXP = DICE_EXPR_REGEX;
  return EMAIL_REGEXP.test(c.value) ? null : { valid: false };
}
