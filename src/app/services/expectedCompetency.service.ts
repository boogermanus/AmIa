import {Injectable} from '@angular/core';
import {IExpectedCompetency} from "../interfaces/iexpectedCompetency";
import {expectedCompetencies} from "../data/expectedCompetencies";

@Injectable({
  providedIn: 'root'
})
export class ExpectedCompetencyService {

  private expectedCompetencies: IExpectedCompetency[] = expectedCompetencies;

  constructor() {
  }

  public getExpectedCompetencyById(id: number): IExpectedCompetency {
    let search = this.expectedCompetencies.find(ec => ec.competencyId === id);

    if(search === undefined)
      return {competencyId: 0, jobLevels: []};

    return search;
  }
}
