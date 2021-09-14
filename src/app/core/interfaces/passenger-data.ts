import { IPaidPosition } from "./tariff";

export type IPassengerData = {
  age: number;
} & {
  [key in IPaidPosition]: number;
}