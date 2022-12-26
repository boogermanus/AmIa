import {Component, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ISection} from "../../interfaces/isection";
import {CompetencyComponent} from "../competency/competency.component";
import {MatExpansionPanel} from "@angular/material/expansion";
import {ISkillLevelChange} from "../../interfaces/iskilllevelchange";

@Component({
  selector: 'app-expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.css']
})
export class ExpansionComponent implements OnInit {

  @Input()public section!: ISection
  @Input()public disabled = true;
  @Input()public jobId = 0;
  @Input()public expanded = false;
  @ViewChildren(CompetencyComponent)public competencies!: QueryList<CompetencyComponent>;
  @ViewChild(MatExpansionPanel)public panel!: MatExpansionPanel;
  constructor() { }

  ngOnInit(): void {
  }

  public onValueChange(event: ISkillLevelChange): void {
    let query = this.competencies.filter(cc => cc.hasValue)

    if(query.length === this.competencies.length)
      this.expanded = false;

  }
}
