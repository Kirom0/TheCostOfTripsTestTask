import { Discount } from "../discount";
import { IPassengerData } from "../../interfaces/passenger-data";
import { ITariffPositions } from "../../interfaces/tariff";
import { sumTariffPositions } from "../tariff";

export class AgeWithoutBaggageDiscount extends Discount {
  private readonly percent: number;
  private readonly decider: (age: number) => boolean;

  constructor(decider: (age: number) => boolean, percent: number) {
    super();
    this.decider = decider;
    this.percent = percent;
  }

  calculateDiscount(passengerData: IPassengerData, positions: ITariffPositions): number {
    if (!this.decider(passengerData.age)) {
      return 0;
    }
    return sumTariffPositions(positions, ['baggageWeight'], true) * this.percent / 100;
  }
}