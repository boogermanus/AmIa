import { TestBed } from '@angular/core/testing';

import { SkillLevelService } from './skillLevel.service';

describe('SectionService', () => {
  let service: SkillLevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillLevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return data for getSkillLevels', () => {
    let value = service.getSkillLevels();
    expect(value.length).toBeGreaterThan(0);
  })
});
