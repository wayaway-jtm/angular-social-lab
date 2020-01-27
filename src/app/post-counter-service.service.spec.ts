import { TestBed } from '@angular/core/testing';

import { PostCounterServiceService } from './post-counter-service.service';

describe('PostCounterServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostCounterServiceService = TestBed.get(PostCounterServiceService);
    expect(service).toBeTruthy();
  });
});
