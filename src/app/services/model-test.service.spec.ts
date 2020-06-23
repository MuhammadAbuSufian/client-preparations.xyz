import { TestBed } from '@angular/core/testing';

import { ModelTestService } from './model-test.service';

describe('ModelTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModelTestService = TestBed.get(ModelTestService);
    expect(service).toBeTruthy();
  });
});
