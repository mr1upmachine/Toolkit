import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatPageComponent } from './combat-page.component';

describe('CombatPageComponent', () => {
  let component: CombatPageComponent;
  let fixture: ComponentFixture<CombatPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombatPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
