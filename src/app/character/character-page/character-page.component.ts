// Angular
import {
  Component,
  HostBinding,
  OnInit,
  OnDestroy,
  TemplateRef,
  ViewChild
} from '@angular/core';

// Rxjs
import {
  Subject,
  BehaviorSubject
} from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

// Font Awesome
import {
  faPencilAlt,
  faCheckSquare
} from '@fortawesome/free-solid-svg-icons';

import { CharacterService } from '../character.service';
import { AppNavService } from 'src/app/app-nav/app-nav.service';
import { ICharacterFb } from 'src/app/shared/character.types';

@Component({
  selector: 'tk-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss']
})
export class CharacterPageComponent implements OnInit, OnDestroy {
  @HostBinding('class') readonly hostClass = 'flex-stretch';
  @HostBinding('class.flex-center') isLoading = true;
  @ViewChild('ToolbarActions') toolbarActions: TemplateRef<any>;

  characterData: any; // TODO type
  private characterData$ = this.characterService.characterData$;

  editMode$ = new BehaviorSubject<boolean>(false);
  editIcon = faPencilAlt;

  private readonly destroy$ = new Subject();

  constructor(
    private characterService: CharacterService,
    private appNavService: AppNavService
  ) {}

  ngOnInit(): void {
    this.appNavService.setToolbarActions(this.toolbarActions);

    this.characterData$.pipe(
      filter(data => data !== null)
    ).subscribe(characterData => {
      this.characterData = characterData;
      this.appNavService.setToolbarTitle(this.characterData.name);
      this.isLoading = false;
    });

    this.editMode$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(editMode => {
      this.editIcon = editMode ? faCheckSquare : faPencilAlt;
    });

    this.characterService.getLastUsedCharacter();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.appNavService.resetToolbar();
  }

  toggleEditMode(): void {
    this.editMode$.next(!this.editMode$.value);
  }

}
