import { Company } from "../company";
import { Tariff } from "../tariff";
import { AgeWithoutBaggageDiscount } from "../discounts/age-discount";

export class RZDCompany extends Company {
  name = 'РЖД';
  tariffs = [
    new EconomyTariff(),
    new AdvancedTariff(),
    new LuxuryTariff(),
  ];
}

class EconomyTariff extends Tariff {
  name = 'Эконом';

  costDistance = (distance: number) => {
    return distance * 0.5;
  }

  costBaggageWeight = (baggageWeight: number) => {
    if (baggageWeight > 50) {
      return null;
    }
    return baggageWeight <= 15 ? 0 : baggageWeight * 50;
  }

  discounts = [
    new AgeWithoutBaggageDiscount((age) => age <= 5, 50),
  ]
}

class AdvancedTariff extends Tariff {
  name = 'Продвинутый';

  costDistance = (distance: number) => {
    return distance * 2;
  }

  costBaggageWeight = (baggageWeight: number) => {
    if (baggageWeight > 60) {
      return null;
    }
    return baggageWeight <= 20 ? 0 : baggageWeight * 50;
  }

  discounts = [
    new AgeWithoutBaggageDiscount((age) => age <= 8, 30),
  ]
}

class LuxuryTariff extends Tariff {
  name = 'Люкс';

  costDistance = (distance: number) => {
    return distance * 4;
  }

  costBaggageWeight = (baggageWeight: number) => {
    return baggageWeight <= 60 ? 0 : null;
  }

  discounts = [
    new AgeWithoutBaggageDiscount((age) => age <= 16, 20),
  ]
}