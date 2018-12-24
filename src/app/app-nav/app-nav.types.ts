import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface IToolbarMenuItem {
  text: string;
  icon?: IconDefinition;
  route?: string;
  click?: () => {};
}
