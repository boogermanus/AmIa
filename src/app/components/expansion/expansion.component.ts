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
  public disabled = true;
  public expanded = false;

  private _jobId: number = 0;
  @Input() set jobId(value: number) {
    this._jobId = value;
    this.disabled = false;
    this.expanded = true;
  }
  public get jobId(): number {
    return this._jobId
  }
  @ViewChildren(CompetencyComponent)public competencies!: QueryList<CompetencyComponent>;
  @ViewChild(MatExpansionPanel)public panel!: MatExpansionPanel;
  constructor() { }

  ngOnInit(): void {
    this.disabled = true;
    this.expanded = false;
  }

  public onValueChange(event: ISkillLevelChange): void {
    let query = this.competencies.filter(cc => cc.hasValue)

    if(query.length === this.competencies.length)
      this.expanded = false;

  }
}
