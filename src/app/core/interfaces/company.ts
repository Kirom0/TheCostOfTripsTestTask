import { ITariff } from "./tariff";

export interface ICompany {
  name: string;
  tariffs: ITariff[];
}