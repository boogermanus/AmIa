import { Injectable } from '@angular/core';
import {ISection} from "../interfaces/isection";
import {sections} from "../data/sections";

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  private sections: ISection[] = sections
  constructor() { }
}
