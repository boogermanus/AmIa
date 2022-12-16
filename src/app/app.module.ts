import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from "@angular/material/card";
import { JobComponent } from './components/job/job.component';
import { SectionComponent } from './components/section/section.component';
import { SkillLevelComponent } from './components/skill-level/skill-level.component';
import { CompetencyComponent } from './components/competency/competency.component';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    SectionComponent,
    SkillLevelComponent,
    CompetencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
