import {IPassengerData} from "./passenger-data";
import {IDiscount} from "./discount";

export interface ITariff {
  name: string;
  calculate: (passengerData: IPassengerData) => null | ICost;
  discounts: IDiscount[];
}

export type ICost = {
  sum: number;
  discount: number;
  total: number;
} & {
  [key in IPaidPosition]: number;
}

export type IPaidPosition = 'distance' | 'baggageWeight';

export type ITariffPositions = Record<IPaidPosition, number>;