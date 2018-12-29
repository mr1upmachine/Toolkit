import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceResultDialogComponent } from './dice-result-dialog.component';

describe('DiceResultDialogComponent', () => {
  let component: DiceResultDialogComponent;
  let fixture: ComponentFixture<DiceResultDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiceResultDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceResultDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
