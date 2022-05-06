"use strict";
exports.__esModule = true;
exports.Flames = void 0;
var Flames = /** @class */ (function () {
    function Flames() {
        this.yourName = '';
        this.crushName = '';
    }
    Flames.prototype.addYourName = function (yourName) {
        this.yourName = yourName;
    };
    Flames.prototype.addYourCurshName = function (crushName) {
        this.crushName = crushName;
    };
    Flames.prototype.calc = function () {
        console.log("".concat(this.yourName, " Loves ").concat(this.crushName));
    };
    return Flames;
}());
exports.Flames = Flames;
