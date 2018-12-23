// Angular
import {
  Component,
  HostBinding,
  OnInit,
  OnDestroy,
  TemplateRef,
  ViewChild
} from '@angular/core';

// Material/Cdk
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

// Rxjs
import {
  Observable,
  Subject,
  BehaviorSubject
} from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Font Awesome
import {
  faPencilAlt,
  faCheckSquare,
  faArrowsAlt
} from '@fortawesome/free-solid-svg-icons';

import { PlayerService } from '../player.service';
import { AppNavService } from 'src/app/app-nav/app-nav.service';

@Component({
  selector: 'tk-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss']
})
export class PlayerPageComponent implements OnInit, OnDestroy {
  @HostBinding('class') readonly hostClass = 'flex-stretch flex-column-nowrap flex-center';
  @ViewChild('ToolbarActions') toolbarActions: TemplateRef<any>;

  readonly faArrowsAlt = faArrowsAlt;

  editMode$ = new BehaviorSubject<boolean>(false);
  editIcon = faPencilAlt;

  player$: Observable<any>;
  playerCards: any[];

  private readonly destroy$ = new Subject();

  constructor(
    public playerService: PlayerService,
    private appNavService: AppNavService
  ) {}

  ngOnInit(): void {
    this.appNavService.setToolbarActions(this.toolbarActions);

    this.editMode$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(editMode => {
      if (editMode) {
        this.editIcon = faCheckSquare;
      } else {
        if (this.playerCards) {
          this.playerService.setPlayerCards(this.playerCards);
        }
        this.editIcon = faPencilAlt;
      }
    });

    this.player$ = this.playerService.playerData$;
    this.player$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(playerData => {
      this.playerCards = playerData.playerCards;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.appNavService.clearToolbarActions();
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.playerCards, event.previousIndex, event.currentIndex);
  }

  toggleEditMode(): void {
    this.editMode$.next(!this.editMode$.value);
  }

}
