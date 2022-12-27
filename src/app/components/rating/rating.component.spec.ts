import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RatingComponent} from './rating.component';
import {ExpectedCompetencyService} from "../../services/expectedCompetency.service";

describe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;
  let expectedCompetencySpy: jasmine.SpyObj<ExpectedCompetencyService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('expectedCompetencyService',['getExpectedScoreByJobId']);
    await TestBed.configureTestingModule({
      declarations: [RatingComponent],
      providers: [{provide: ExpectedCompetencyService, useValue: spy}]
    })
      .compileComponents();

    expectedCompetencySpy = TestBed.inject(ExpectedCompetencyService) as jasmine.SpyObj<ExpectedCompetencyService>;

    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onRatingChanged', () => {
    it('should add to totalScore', () => {
      const expected = {previousValue: 0, newValue: 1}
      component.onRatingChanged(expected);
      expect(component.totalScore).toEqual(expected.newValue)
    });

    it('should set totalScore to newValue', () => {
      component.totalScore = 1;
      const expected = {previousValue: 2, newValue: 1};
      component.onRatingChanged(expected);
      expect(component.totalScore).toEqual(expected.newValue);
    });
    it('should set totalScore to newValue minus previousValue', () => {
      const expected = {previousValue: 10, newValue: 1};
      component.totalScore = 11;
      component.onRatingChanged(expected);
      expect(component.totalScore).toEqual(2);
    });
  });

  describe('jobId', () => {
    it('should set totalScore to zero', () =>{
      component.totalScore = 10;
      component.jobId = 0;
      expect(component.totalScore).toEqual(0);
    });
    it('should call expected competency service', () => {
      component.jobId = 0;
      expect(expectedCompetencySpy.getExpectedScoreByJobId).toHaveBeenCalled();
    });
    it('should set neededScore equal to 1', () => {
      component.neededScore = 10;
      expectedCompetencySpy.getExpectedScoreByJobId.and.returnValue(1);
      component.jobId = 0;
      expect(component.neededScore).toEqual(1);
    });
    it('should return zero', () => {
      expect(component.jobId).toEqual(0);
    });
  });
});
