import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillLevelComponent } from './skill-level.component';
import {MaterialModule} from "../../material.module";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";

describe('SkillLevelComponent', () => {
  let component: SkillLevelComponent;
  let fixture: ComponentFixture<SkillLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillLevelComponent ],
      imports: [MaterialModule, NoopAnimationsModule, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
