// TODO fix dice expr regex
export const DICE_EXPR_W_PAREN_REGEX = /(([\+\-\*\/]?(\(*[0-9]*d[0-9]+([\^v][0-9]+)?)+\)*)|(\(*[\+\-\*\/]?[0-9]+\)*))+/g;
export const DICE_EXPR_REGEX = /(([\+\-\*\/]?(\(*[0-9]*d[0-9]+([\^v][0-9]+)?)+\)*)|(\(*[\+\-\*\/]?[0-9]+\)*))+/g;
export const DICE_REGEX = /[0-9]*d[0-9]+([\^v][0-9])?/g;
export const PAREN_GROUP_REGEX = /\(.+\)/g;
