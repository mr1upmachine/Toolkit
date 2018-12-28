import {
  Component,
  OnDestroy,
  OnInit,
  HostBinding
} from '@angular/core';
import { CharacterApiService } from '../shared/character-api.service';
import { AppNavService } from 'src/app/app-nav/app-nav.service';

@Component({
  selector: 'tk-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit, OnDestroy {
  @HostBinding('class') readonly hostClass = 'flex-stretch flex-column-nowrap';
  characterList$ = this.characterApiService.getAllCharacters(); // TODO: Swap with player specific call

  constructor(
    private characterApiService: CharacterApiService,
    private appNavService: AppNavService
  ) { }

  ngOnInit(): void {
    this.appNavService.setToolbarActionMenu([
      {
        text: 'Create Character',
        route: '/characters/create'
      }
    ]);
  }

  ngOnDestroy(): void {
    this.appNavService.resetToolbar();
  }

  setLastViewedCharacter(characterId: string): void {
    this.characterApiService.setLastViewedCharacter(characterId);
  }

}
