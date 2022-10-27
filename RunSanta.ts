import { Bag } from "./Bag";
import { BagType } from "./BagType";
import { Present } from "./Present";
import { PresentType } from "./PresentType";
import { Santa } from "./Santa";
import { Sled } from "./Sled";

const santa = new Santa("Santa Clause", 65);

const sled = new Sled(santa);

const bag = new Bag(25, BagType.paper);

const presentOne = new Present("snowboard", 9, PresentType.hard);
const presentTwo = new Present("beanbag chair", 3, PresentType.soft);

bag.addPresent(presentOne);
//bag.addPresent(presentTwo);

sled.addBag(bag);

sled.addPresentAndNewBagIfNeeded(presentTwo);

sled.print();
