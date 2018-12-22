import { Component, HostBinding, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { PlayerService } from '../player.service';

@Component({
  selector: 'tk-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss']
})
export class PlayerPageComponent implements OnInit {
  @HostBinding('class') readonly hostClass = 'flex-stretch flex-column-nowrap';
  @HostBinding('class.flex-center') ready = true;

  player$: Observable<any>;
  playerCards: any[];

  constructor(
    public playerService: PlayerService
  ) {}

  ngOnInit() {
    this.player$ = this.playerService.playerData$;
    this.player$.subscribe(playerData => {
      this.playerCards = playerData.playerCards;
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.playerCards, event.previousIndex, event.currentIndex);
    this.playerService.setPlayerCards(this.playerCards);
  }

}
