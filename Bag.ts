import { BagType } from "./BagType";
import { Present } from "./Present";
import { PresentType } from "./PresentType";

export class Bag {
  maxWeight: number;
  bag: BagType;
  presents: Present[] = [];

  constructor(maxWeight: number, bag: BagType) {
    this.maxWeight = maxWeight;
    this.bag = bag;
    this.presents = [];
  }

  jusAddPresent(present: Present) {
    this.presents.push(present);
  }

  addPresent(present: Present) {
    if (this.totalWeight() + present.weight > this.maxWeight) {
      console.log("The bag has reached its maximum weight limit!");
      return false;
    } else {
      if (present.present === PresentType.soft && this.bag === BagType.canvas) {
        this.presents.push(present);
      } else if (present.present === PresentType.hard) {
        this.presents.push(present);
      } else if (
        present.present === PresentType.soft &&
        this.bag === BagType.paper
      ) {
        // console.log("Soft presents can only be added to the canvas bags!");
        return false;
      }
      return true;
    }
  }

  totalWeight(): number {
    let totalWeight = 0;

    this.presents.forEach((present) => {
      totalWeight += present.weight;
    });

    return totalWeight;
  }

  public print(): void {
    console.log(
      "This bag has the maximum weight of " +
        this.maxWeight +
        " and is of type " +
        this.bag +
        ". It containes the following presents: "
    );
    this.presents.forEach((present) => {
      present.print();
    });
  }
}
