import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceKeypadComponent } from './dice-keypad.component';

describe('DiceKeypadComponent', () => {
  let component: DiceKeypadComponent;
  let fixture: ComponentFixture<DiceKeypadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiceKeypadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceKeypadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
