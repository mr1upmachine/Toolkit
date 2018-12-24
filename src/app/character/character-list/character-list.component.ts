import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../shared/character.service';

@Component({
  selector: 'tk-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characterList$ = this.characterService.getAllCharacters();

  constructor(
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {

  }

}
