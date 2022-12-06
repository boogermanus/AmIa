import { Injectable } from '@angular/core';
import {ISection} from "../interfaces/isection";
import {sections} from "../data/sections";

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  public sections: ISection[] = sections
  constructor() { }

  public getSections(): ISection[] {
    return this.sections;
  }
}
