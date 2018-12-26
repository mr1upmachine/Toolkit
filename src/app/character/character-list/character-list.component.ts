import {
  Component,
  OnDestroy,
  OnInit,
  HostBinding
} from '@angular/core';
import { CharacterService } from '../shared/character.service';
import { AppNavService } from 'src/app/app-nav/app-nav.service';

@Component({
  selector: 'tk-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit, OnDestroy {
  @HostBinding('class') readonly hostClass = 'flex-stretch flex-column-nowrap';
  characterList$ = this.characterService.getAllCharacters();

  constructor(
    private characterService: CharacterService,
    private appNavService: AppNavService
  ) { }

  ngOnInit(): void {
    // HACK: timing is too narrow, throws error. This forces to be run after zone.js is done
    setTimeout(() => {
      this.appNavService.setToolbarActionMenu([
        {
          text: 'Create Character',
          route: '/characters/create'
        }
      ]);
    });
  }

  ngOnDestroy(): void {
    this.appNavService.resetToolbar();
  }

  setLastViewedCharacter(characterId: string): void {
    this.characterService.setLastViewedCharacter(characterId);
  }

}
