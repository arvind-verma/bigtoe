import { TestBed } from '@angular/core/testing';

import { ConstantConfigService } from './constant-config.service';

describe('ConstantConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConstantConfigService = TestBed.get(ConstantConfigService);
    expect(service).toBeTruthy();
  });
});
