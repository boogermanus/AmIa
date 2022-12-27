import {TestBed} from '@angular/core/testing';

import {SectionService} from './section.service';

describe('SectionService', () => {
  let service: SectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getSections', () => {
    it('should return an array', () =>
    {
      const result = service.getSections();
      expect(result).toBeInstanceOf(Array);
    });
  })
});
