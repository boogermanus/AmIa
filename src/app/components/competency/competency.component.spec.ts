import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencyComponent } from './competency.component';
import {MaterialModule} from "../../material.module";
import {SkillLevelComponent} from "../skill-level/skill-level.component";
import {ReactiveFormsModule} from "@angular/forms";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

describe('CompetencyComponent', () => {
  let component: CompetencyComponent;
  let fixture: ComponentFixture<CompetencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetencyComponent, SkillLevelComponent ],
      imports: [MaterialModule, NoopAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
