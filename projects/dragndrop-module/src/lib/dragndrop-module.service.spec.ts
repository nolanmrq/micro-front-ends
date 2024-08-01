import { TestBed } from '@angular/core/testing';

import { DragndropModuleService } from './dragndrop-module.service';

describe('DragndropModuleService', () => {
  let service: DragndropModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragndropModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
