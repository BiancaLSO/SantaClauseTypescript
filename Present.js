"use strict";
exports.__esModule = true;
exports.Present = void 0;
var Present = /** @class */ (function () {
    function Present(name, weight, present) {
        this.name = name;
        this.weight = weight;
        this.present = present;
    }
    Present.prototype.print = function () {
        console.log(this.name + " " + this.weight + " " + this.present);
    };
    return Present;
}());
exports.Present = Present;
