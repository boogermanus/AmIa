import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobComponent } from './job.component';
import {MaterialModule} from "../../material.module";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

describe('JobComponent', () => {
  let component: JobComponent;
  let fixture: ComponentFixture<JobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobComponent ],
      imports: [MaterialModule, NoopAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
