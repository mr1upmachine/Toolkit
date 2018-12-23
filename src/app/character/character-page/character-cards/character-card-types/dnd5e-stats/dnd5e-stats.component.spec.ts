import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dnd5eStatsComponent } from './dnd5e-stats.component';

describe('Dnd5eStatsComponent', () => {
  let component: Dnd5eStatsComponent;
  let fixture: ComponentFixture<Dnd5eStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dnd5eStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dnd5eStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
