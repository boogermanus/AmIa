import { Injectable } from '@angular/core';
import {ISkillLevel} from "../interfaces/iskillLevel";
import {skillLevels} from "../data/skillLevels";

@Injectable({
  providedIn: 'root'
})
export class SkillLevelService {

  private skillLevels: ISkillLevel[] = skillLevels
  constructor() { }

  public getSkillLevels(): ISkillLevel[] {
    return this.skillLevels;
  }
}
