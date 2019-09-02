import { TestBed } from '@angular/core/testing';

import { DogOwnerService } from './dog-owner.service';

describe('DogOwnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DogOwnerService = TestBed.get(DogOwnerService);
    expect(service).toBeTruthy();
  });
});
