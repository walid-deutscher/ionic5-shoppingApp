import { TestBed, async, inject } from '@angular/core/testing';

import { LoGuard } from './lo.guard';

describe('LoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoGuard]
    });
  });

  it('should ...', inject([LoGuard], (guard: LoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
