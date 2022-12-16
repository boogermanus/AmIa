import {Component, Input, OnInit} from '@angular/core';
import {ICompetency} from "../../interfaces/icompetency";

@Component({
  selector: 'app-competency',
  templateUrl: './competency.component.html',
  styleUrls: ['./competency.component.css']
})
export class CompetencyComponent implements OnInit {

  @Input()public competency: ICompetency = {id: 0, name: ""}
  constructor() { }

  ngOnInit(): void {
  }

}
