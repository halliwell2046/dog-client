import { TestBed } from '@angular/core/testing';

import { DoggoService } from './doggo.service';

describe('DoggoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoggoService = TestBed.get(DoggoService);
    expect(service).toBeTruthy();
  });
});
