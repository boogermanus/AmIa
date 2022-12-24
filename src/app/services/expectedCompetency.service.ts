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

  public getExpectedCompetencies(): IExpectedCompetency[] {
    return this.expectedCompetencies;
  }
}
