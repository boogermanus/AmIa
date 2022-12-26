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

  public getExpectedScoreByJobId(id: number): number {
    const mapped = this.expectedCompetencies.map(ec => ec.jobLevels);
    let sum = 0;

    if(id-1 < 0)
      return sum;

    for (const mappedElement of mapped) {
      sum += mappedElement[id-1];
    }
    return sum;
  }
}
