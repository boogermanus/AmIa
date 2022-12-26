import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionComponent } from './expansion.component';
import {MaterialModule} from "../../material.module";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

describe('ExpansionComponent', () => {
  let component: ExpansionComponent;
  let fixture: ComponentFixture<ExpansionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpansionComponent ],
      imports: [MaterialModule, NoopAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
