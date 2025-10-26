import { TestBed } from '@angular/core/testing';

import { Haptic } from './haptic';

describe('Haptic', () => {
  let service: Haptic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Haptic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
