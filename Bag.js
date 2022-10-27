"use strict";
exports.__esModule = true;
exports.Bag = void 0;
var BagType_1 = require("./BagType");
var PresentType_1 = require("./PresentType");
var Bag = /** @class */ (function () {
    function Bag(maxWeight, bag) {
        this.presents = [];
        this.maxWeight = maxWeight;
        this.bag = bag;
        this.presents = [];
    }
    Bag.prototype.jusAddPresent = function (present) {
        this.presents.push(present);
    };
    Bag.prototype.addPresent = function (present) {
        if (this.totalWeight() + present.weight > this.maxWeight) {
            console.log("The bag has reached its maximum weight limit!");
            return false;
        }
        else {
            if (present.present === PresentType_1.PresentType.soft && this.bag === BagType_1.BagType.canvas) {
                this.presents.push(present);
            }
            else if (present.present === PresentType_1.PresentType.hard) {
                this.presents.push(present);
            }
            else if (present.present === PresentType_1.PresentType.soft &&
                this.bag === BagType_1.BagType.paper) {
                // console.log("Soft presents can only be added to the canvas bags!");
                return false;
            }
            return true;
        }
    };
    Bag.prototype.totalWeight = function () {
        var totalWeight = 0;
        this.presents.forEach(function (present) {
            totalWeight += present.weight;
        });
        return totalWeight;
    };
    Bag.prototype.print = function () {
        console.log("This bag has the maximum weight of " +
            this.maxWeight +
            " and is of type " +
            this.bag +
            ". It containes the following presents: ");
        this.presents.forEach(function (present) {
            present.print();
        });
    };
    return Bag;
}());
exports.Bag = Bag;
