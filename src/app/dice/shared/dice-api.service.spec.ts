import { TestBed } from '@angular/core/testing';

import { DiceApiService } from './dice-api.service';

describe('DiceApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiceApiService = TestBed.get(DiceApiService);
    expect(service).toBeTruthy();
  });
});
