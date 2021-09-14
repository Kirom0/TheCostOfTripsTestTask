import { ITariff } from "../interfaces/tariff";
import { ICompany } from "../interfaces/company";

export abstract class Company implements ICompany {
  abstract name: string;
  abstract tariffs: ITariff[];
}