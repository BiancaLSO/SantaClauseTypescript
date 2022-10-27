"use strict";
exports.__esModule = true;
exports.Santa = void 0;
var Santa = /** @class */ (function () {
    function Santa(name, age) {
        this.name = name;
        this.age = age;
    }
    Santa.prototype.print = function () {
        console.log(this.name.toLocaleUpperCase() + ", of age: " + this.age);
    };
    return Santa;
}());
exports.Santa = Santa;
