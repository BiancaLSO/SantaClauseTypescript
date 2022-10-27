import { Bag } from "./Bag";
import { BagType } from "./BagType";
import { Present } from "./Present";
import { PresentType } from "./PresentType";
import { Santa } from "./Santa";

export class Sled {
  santa: Santa;
  bags: Bag[] = [];

  constructor(santa: Santa) {
    this.santa = santa;
    this.bags = [];
  }

  addBag(bag: Bag) {
    this.bags.push(bag);
  }

  addPresentAndNewBagIfNeeded(present: Present) {
    const bag = new Bag(10, BagType.canvas);
    if (this.bags.length === 0) {
      bag.addPresent(present);
      this.addBag(bag);
    } else if (present.present === PresentType.soft) {
      const arrayLength = this.bags.length;
      const lastIndex = arrayLength - 1;
      if (this.bags[lastIndex].addPresent(present)) {
        console.log("The present was added succesfully!");
      } else {
        bag.addPresent(present);
        this.addBag(bag);
        console.log("A new bag was added in order to add the present!");
      }
    }
  }

  public print(): void {
    console.log("This sled belongs to  ");
    this.santa.print();

    this.bags.forEach((bag) => {
      bag.print();
    });
  }
}
