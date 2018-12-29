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

import { CharacterApiService } from '../shared/character-api.service';
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
    private characterApiService: CharacterApiService,
    private appNavService: AppNavService
  ) { }

  ngOnInit(): void {
    this.appNavService.setToolbarActions(this.toolbarActions);
    this.appNavService.setToolbarActionMenu([
      {
        text: 'Change Character',
        route: '/characters/list'
      }
    ]);

    const id = this.route.snapshot.paramMap.get('id');
    this.characterApiService.id = id;
    this.characterApiService.getCharacterData$(id).pipe(
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
