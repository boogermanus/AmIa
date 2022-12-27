import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencyComponent } from './competency.component';
import {MaterialModule} from "../../material.module";
import {SkillLevelComponent} from "../skill-level/skill-level.component";
import {ReactiveFormsModule} from "@angular/forms";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {ExpectedCompetencyService} from "../../services/expectedCompetency.service";

describe('CompetencyComponent', () => {
  let component: CompetencyComponent;
  let fixture: ComponentFixture<CompetencyComponent>;
  let expectedCompetencySpy: jasmine.SpyObj<ExpectedCompetencyService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('expectedCompetencyService',['getExpectedCompetencyById']);
    await TestBed.configureTestingModule({
      declarations: [ CompetencyComponent, SkillLevelComponent ],
      imports: [MaterialModule, NoopAnimationsModule],
      providers: [{provide: ExpectedCompetencyService, useValue: spy}]
    })
    .compileComponents();
    expectedCompetencySpy = TestBed.inject(ExpectedCompetencyService) as jasmine.SpyObj<ExpectedCompetencyService>;
    fixture = TestBed.createComponent(CompetencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('clear', () => {
    it('should set hasValue to false', () =>{
      component.hasValue = true;
      component.clear();
      expect(component.hasValue).toBeFalse();
    });
    it('should set hideExpected to true', () => {
      component.hideExpected = false;
      component.clear();
      expect(component.hideExpected).toBeTrue();
    });
  });

  describe('onValueChanged', ()=>{
    it('should call getExpectedCompetencyById', ()=> {
      expectedCompetencySpy.getExpectedCompetencyById.and.returnValue({competencyId: 0, jobLevels:[1,2]})
      component.onValueChanged({previousValue: 0, newValue: 0});
      expect(expectedCompetencySpy.getExpectedCompetencyById).toHaveBeenCalled();
    });
  });
});
