import {
  Component,
  OnInit,
  Input,
  HostBinding,
  HostListener
} from '@angular/core';
import { IDnd5eStats } from 'src/app/shared/character.types';

@Component({
  selector: 'tk-dnd5e-stats',
  templateUrl: './dnd5e-stats.component.html',
  styleUrls: ['./dnd5e-stats.component.scss']
})
export class Dnd5eStatsComponent implements OnInit {
  @HostBinding('class') readonly hostClass = 'flex-column-nowrap flex-h-center p-bottom-10';

  @Input() stats: IDnd5eStats;
  @Input() str: number;
  @Input() dex: number;
  @Input() con: number;
  @Input() int: number;
  @Input() wis: number;
  @Input() cha: number;

  showBonus = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('click', ['$event'])
  toggleStatView(): void {
    this.showBonus = !this.showBonus;
  }

}
