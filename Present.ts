import { PresentType } from "./PresentType";

export class Present {
  name: string;
  weight: number;
  present: PresentType;

  constructor(name: string, weight: number, present: PresentType) {
    this.name = name;
    this.weight = weight;
    this.present = present;
  }

  public print(): void {
    console.log(this.name + " " + this.weight + " " + this.present);
  }
}
