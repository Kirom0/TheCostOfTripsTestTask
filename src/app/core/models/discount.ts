import { IDiscount } from "../interfaces/discount";
import { IPassengerData } from "../interfaces/passenger-data";
import { ITariffPositions } from "../interfaces/tariff";

export abstract class Discount implements IDiscount {
  abstract calculateDiscount(passengerData: IPassengerData, positions: ITariffPositions): number;
}