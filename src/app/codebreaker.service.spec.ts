import { TestBed } from '@angular/core/testing';

import { CodebreakerService } from './codebreaker.service';

describe('CodebreakerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CodebreakerService = TestBed.get(CodebreakerService);
    expect(service).toBeTruthy();
  });
});
