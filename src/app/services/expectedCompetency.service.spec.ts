import {TestBed} from '@angular/core/testing';
import {ExpectedCompetencyService} from "./expectedCompetency.service";

describe('ExpectedCompetencyService', () => {
  let service: ExpectedCompetencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpectedCompetencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getExpectedScoreByJobId', () => {
    it('should return a total for a job', () => {
      let result = service.getExpectedScoreByJobId(1)
      expect(result).toBeGreaterThan(0);
    });

    it('should return zero for negative input', () => {
      const value = service.getExpectedScoreByJobId(0);
      expect(value).toEqual(0);
    });
  });
  describe('getExpectedCompetencyById', () => {
    it('should return zero for competencyId', ()=>{
      const value = service.getExpectedCompetencyById(-1);

      expect(value.competencyId).toEqual(0);
    });
    it('should return first competency', () => {
      const value = service.getExpectedCompetencyById(1);

      expect(value.competencyId).toEqual(1);
    });
  });
});
