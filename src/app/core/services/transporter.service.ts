import { Injectable } from "@angular/core";
import { AeroflotCompany } from "../models/companies/AeroflotCompany";
import { RZDCompany } from "../models/companies/RZDCompany";
import { ICompany } from "../interfaces/company";

@Injectable({ providedIn: 'root'})
export class TransporterService {
  public transporters: ICompany[] = [
    new AeroflotCompany(),
    new RZDCompany(),
  ];
}