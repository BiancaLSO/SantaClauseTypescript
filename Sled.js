"use strict";
exports.__esModule = true;
exports.Sled = void 0;
var Bag_1 = require("./Bag");
var BagType_1 = require("./BagType");
var PresentType_1 = require("./PresentType");
var Sled = /** @class */ (function () {
    function Sled(santa) {
        this.bags = [];
        this.santa = santa;
        this.bags = [];
    }
    Sled.prototype.addBag = function (bag) {
        this.bags.push(bag);
    };
    Sled.prototype.addPresentAndNewBagIfNeeded = function (present) {
        var bag = new Bag_1.Bag(10, BagType_1.BagType.canvas);
        if (this.bags.length === 0) {
            bag.addPresent(present);
            this.addBag(bag);
        }
        else if (present.present === PresentType_1.PresentType.soft) {
            var arrayLength = this.bags.length;
            var lastIndex = arrayLength - 1;
            if (this.bags[lastIndex].addPresent(present)) {
                console.log("The present was added succesfully!");
            }
            else {
                bag.addPresent(present);
                this.addBag(bag);
                console.log("A new bag was added in order to add the present!");
            }
        }
    };
    Sled.prototype.print = function () {
        console.log("This sled belongs to  ");
        this.santa.print();
        this.bags.forEach(function (bag) {
            bag.print();
        });
    };
    return Sled;
}());
exports.Sled = Sled;
