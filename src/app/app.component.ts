import {Component, ViewChild} from '@angular/core';
import {SectionComponent} from "./components/section/section.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public jobId: number = 0;
  public sectionsDisabled: boolean = true;
  public sectionsExpanded: boolean = false;
  @ViewChild(SectionComponent) private sectionComponent!: SectionComponent;
  constructor() {
  }

  onJobChange(event: string): void {
    this.jobId = +event;
    this.sectionsDisabled = false;
    this.sectionsExpanded = true;
  }
}
