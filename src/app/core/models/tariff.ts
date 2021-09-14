import { ITariff, ITariffPositions } from "../interfaces/tariff";
import { IPassengerData } from "../interfaces/passenger-data";
import { IDiscount } from "../interfaces/discount";

export abstract class Tariff implements ITariff{
  abstract name: string;

  calculate(passengerData: IPassengerData) {
    const calculatedPaidParameters = this.calculatePaidPositions(passengerData);
    if (calculatedPaidParameters === null) {
      return null;
    }

    const sum = sumTariffPositions(calculatedPaidParameters, [], true);
    const discount = this.discounts.reduce(
      (acc, discount) =>
        acc + discount.calculateDiscount(passengerData, calculatedPaidParameters), 0
    );
    return {
      distance: calculatedPaidParameters.distance,
      baggageWeight: calculatedPaidParameters.baggageWeight,
      sum,
      discount,
      total: sum - discount
    };
  }

  calculatePaidPositions(passengerData: IPassengerData): null | ITariffPositions {
    const result = {
      distance: this.costDistance(passengerData.distance),
      baggageWeight: this.costBaggageWeight(passengerData.baggageWeight),
    }
    const permissionForFlying = Object.keys(result)
      .map(key => result[key as keyof ITariffPositions])
      .reduce((acc, cur) => acc && cur !== null, true);
    return permissionForFlying ? <ITariffPositions>result : null;
  }

  abstract costDistance: (distance: number) => null | number;
  abstract costBaggageWeight: (baggageWeight: number) => null | number;
  discounts: IDiscount[] = [];
}

export function sumTariffPositions(positions: ITariffPositions, params: (keyof ITariffPositions)[], exclude = false) {
  return Object.keys(positions)
    .filter(key => params.includes(key as keyof ITariffPositions) !== exclude)
    .map(key => positions[key as keyof ITariffPositions])
    .reduce((acc, cur) => acc + cur, 0);
}