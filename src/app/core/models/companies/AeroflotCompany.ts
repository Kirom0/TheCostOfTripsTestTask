import { Company } from "../company";
import { Tariff } from "../tariff";
import { AgeWithoutBaggageDiscount } from "../discounts/age-discount";

export class AeroflotCompany extends Company {
  name = 'Аэрофлот';
  tariffs = [
    new EconomyTariff(),
    new AdvancedTariff(),
    new LuxuryTariff(),
  ];
}

class EconomyTariff extends Tariff {
  name = 'Эконом';

  costDistance = (distance: number) => {
    return distance * 4;
  }

  costBaggageWeight = (baggageWeight: number) => {
    return baggageWeight <= 5 ? 0 : 4000;
  }
}

class AdvancedTariff extends Tariff {
  name = 'Продвинутый';

  costDistance = (distance: number) => {
    return distance * 8;
  }

  costBaggageWeight = (baggageWeight: number) => {
    if (baggageWeight > 50) {
      return null;
    }
    return baggageWeight <= 20 ? 0 : 5000;
  }

  discounts = [
    new AgeWithoutBaggageDiscount((age) => age <= 7, 30),
  ]
}

class LuxuryTariff extends Tariff {
  name = 'Люкс';

  costDistance = (distance: number) => {
    return distance * 15;
  }

  costBaggageWeight = (baggageWeight: number) => {
    return baggageWeight <= 50 ? 0 : null;
  }

  discounts = [
    new AgeWithoutBaggageDiscount((age) => age <= 16, 30),
  ]
}