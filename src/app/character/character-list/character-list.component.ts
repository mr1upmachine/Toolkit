import { Component, OnInit, HostBinding } from '@angular/core';
import { CharacterService } from '../shared/character.service';

@Component({
  selector: 'tk-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  @HostBinding('class') readonly hostClass = 'flex-stretch';
  characterList$ = this.characterService.getAllCharacters();

  constructor(
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {

  }

}
