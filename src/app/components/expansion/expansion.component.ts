import {Component, Input, OnInit} from '@angular/core';
import {ISection} from "../../interfaces/isection";

@Component({
  selector: 'app-expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.css']
})
export class ExpansionComponent implements OnInit {

  @Input()public section!: ISection
  @Input()public disabled = true;
  @Input()public jobId = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
