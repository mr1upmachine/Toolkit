import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCardsComponent } from './character-cards.component';

describe('CharacterCardsComponent', () => {
  let component: CharacterCardsComponent;
  let fixture: ComponentFixture<CharacterCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
