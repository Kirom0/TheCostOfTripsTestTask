import { IPassengerData } from "./passenger-data";
import { ITariffPositions } from "./tariff";

export interface IDiscount {
  calculateDiscount: (passengerData: IPassengerData, positions: ITariffPositions) => number;
}