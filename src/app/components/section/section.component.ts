import {Component, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ISection} from "../../interfaces/isection";
import {SectionService} from "../../services/section.service";
import {CompetencyComponent} from "../competency/competency.component";
import {ISkillLevelChange} from "../../interfaces/iskilllevelchange";
import {MatSelect} from "@angular/material/select";
import {MatExpansionPanel} from "@angular/material/expansion";

@Component({
  selector: 'app-sections',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  public sections: ISection[] = []
  @Input()public disabled: boolean = true;
  @Input()public jobId: number = 0;
  @ViewChildren(CompetencyComponent)public competencies!: QueryList<CompetencyComponent>;
  @ViewChild(MatExpansionPanel)public panel!: MatExpansionPanel;

  constructor(private sectionService: SectionService) { }

  ngOnInit(): void {
    this.sections = this.sectionService.getSections();
  }

  public onValueChange(event: ISkillLevelChange): void {
    let query = this.competencies.filter(cc => !cc.hasValue)

    if(query.length === this.competencies.length)
      this.panel.close();

  }

}
