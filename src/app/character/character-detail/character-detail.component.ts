// Angular
import {
  Component,
  HostBinding,
  OnInit,
  OnDestroy,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Rxjs
import {
  Subject,
  BehaviorSubject
} from 'rxjs';
import {
  takeUntil,
  filter
} from 'rxjs/operators';

// Font Awesome
import {
  faPencilAlt,
  faCheckSquare
} from '@fortawesome/free-solid-svg-icons';

import { CharacterService } from '../shared/character.service';
import { AppNavService } from 'src/app/app-nav/app-nav.service';
import { ICharacterFb } from 'src/app/shared/character.types';

@Component({
  selector: 'tk-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit, OnDestroy {
  @HostBinding('class') readonly hostClass = 'flex-stretch flex-column-nowrap';
  @ViewChild('ToolbarActions') toolbarActions: TemplateRef<any>;

  characterData: ICharacterFb | any; // TODO enforce type

  editMode$ = new BehaviorSubject<boolean>(false);
  editIcon = faPencilAlt;

  private readonly destroy$ = new Subject();

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private appNavService: AppNavService
  ) { }

  ngOnInit(): void {
    this.appNavService.setToolbarActions(this.toolbarActions);
    // HACK: timing is too narrow, throws error. This forces to be run after zone.js is done
    setTimeout(() => {
      this.appNavService.setToolbarActionMenu([
        {
          text: 'Change Character',
          route: '/characters/list'
        }
      ]);
    });

    const id = this.route.snapshot.paramMap.get('id');
    this.characterService.id = id;
    this.characterService.getCharacterData$(id).pipe(
      takeUntil(this.destroy$),
      filter(data => data !== null && data !== undefined)
    ).subscribe(characterData => {
      this.characterData = characterData;
      this.appNavService.setToolbarTitle(this.characterData.name);
    });

    this.editMode$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(editMode => {
      this.editIcon = editMode ? faCheckSquare : faPencilAlt;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.appNavService.resetToolbar();
  }

  toggleEditMode(): void {
    this.editMode$.next(!this.editMode$.value);
  }

}
