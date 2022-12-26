import { TestBed } from '@angular/core/testing';
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

  it('should return a total for a job', () =>{
    let result = service.getExpectedScoreByJobId(1)
    expect(result).toBeGreaterThan(0);
  })
});
