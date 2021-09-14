import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ICompany } from "src/app/core/interfaces/company";
import { TransporterService } from "../../core/services/transporter.service";
import { IPassengerData } from "../../core/interfaces/passenger-data";
import { ICost, ITariff } from "../../core/interfaces/tariff";

@Component({
  selector: 'app-trip-calculator',
  templateUrl: './trip-calculator.component.html',
  styleUrls: ['./trip-calculator.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TripCalculatorComponent implements OnInit {
  public form: FormGroup;
  public companies: ICompany[];
  public passengerData: IPassengerData | null;

  constructor(private transporterService: TransporterService) {
    this.form = new FormGroup({
        distance: new FormControl(''),
        age: new FormControl(''),
        baggageWeight: new FormControl(''),
      }
    );
    this.companies = this.transporterService.transporters;
    this.passengerData = null;
  }

  ngOnInit(): void {
  }

  submit() {
    this.passengerData = this.form.getRawValue() as IPassengerData;
  }

  calculatePrice(tariff: ITariff): null | ICost {
    if (this.passengerData === null) {
      return { total: 0, discount: 0 } as ICost;
    }
    const cost = tariff.calculate(this.passengerData);
    console.log(tariff.name, cost);
    return cost;
  }
}