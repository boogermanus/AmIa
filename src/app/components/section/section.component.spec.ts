import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionComponent } from './section.component';
import {ExpansionComponent} from "../expansion/expansion.component";
import {MaterialModule} from "../../material.module";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {CompetencyComponent} from "../competency/competency.component";
import {SkillLevelComponent} from "../skill-level/skill-level.component";

describe('SectionComponent', () => {
  let component: SectionComponent;
  let fixture: ComponentFixture<SectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionComponent, ExpansionComponent, CompetencyComponent, SkillLevelComponent ],
      imports: [MaterialModule, NoopAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
