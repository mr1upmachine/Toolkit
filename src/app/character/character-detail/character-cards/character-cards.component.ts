// Angular
import {
  Component,
  HostBinding,
  OnInit,
  OnDestroy,
  Input
} from '@angular/core';

// Material/Cdk
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

// Rxjs
import {
  Subject,
  BehaviorSubject
} from 'rxjs';
import { takeUntil  } from 'rxjs/operators';

// Font Awesome
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons';

import { CharacterApiService } from '../../shared/character-api.service';
import { ECharacterCard } from './character-card-types/chatacter-cards.types';

@Component({
  selector: 'tk-character-cards',
  templateUrl: './character-cards.component.html',
  styleUrls: ['./character-cards.component.scss']
})
export class CharacterCardsComponent implements OnInit, OnDestroy {
  @HostBinding('class') readonly hostClass = 'flex-stretch flex-column-nowrap';
  @Input() characterCards: string[];
  @Input() characterStats: any; // TODO: Abstract this out entirely
  @Input() editMode$: BehaviorSubject<boolean>;

  readonly ECharacterCard = ECharacterCard;
  readonly faArrowsAlt = faArrowsAlt;

  private readonly destroy$ = new Subject();

  constructor(
    public characterApiService: CharacterApiService
  ) {}

  ngOnInit(): void {
    this.editMode$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(editMode => {
      if (!editMode && this.characterCards) {
        this.characterApiService.setMetadataCards(this.characterCards);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.characterCards, event.previousIndex, event.currentIndex);
  }
}
