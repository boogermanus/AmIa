import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpansionComponent } from './expansion.component';
import {MaterialModule} from "../../material.module";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {QueryList} from "@angular/core";
import {CompetencyComponent} from "../competency/competency.component";
import {ExpectedCompetencyService} from "../../services/expectedCompetency.service";

describe('ExpansionComponent', () => {
  let component: ExpansionComponent;
  let fixture: ComponentFixture<ExpansionComponent>;
  let expectedCompetencySpy: jasmine.SpyObj<ExpectedCompetencyService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('expectedCompetencyService',['']);
    await TestBed.configureTestingModule({
      declarations: [ ExpansionComponent ],
      imports: [MaterialModule, NoopAnimationsModule]
    })
    .compileComponents();
    expectedCompetencySpy = TestBed.inject(ExpectedCompetencyService) as jasmine.SpyObj<ExpectedCompetencyService>;
    fixture = TestBed.createComponent(ExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onValueChange', () => {
    it('should set hideIcon to false', () => {
      component.onValueChange({previousValue: 0, newValue: 1});
      expect(component.hideIcon).toBeFalse();
    });
    it('should set hideIcon to true', () => {
      component.competencies = new QueryList<CompetencyComponent>()
      component.competencies.reset([...component.competencies.toArray(), new CompetencyComponent(expectedCompetencySpy)])
      component.onValueChange({previousValue: 0, newValue: 1});
      expect(component.hideIcon).toBeTrue();
    })
  });
});
