"use strict";
exports.__esModule = true;
exports.Validator = exports.numberRegexp = void 0;
exports.numberRegexp = /^[0-9]+$/;
var Validator = /** @class */ (function () {
    function Validator() {
    }
    Validator.prototype.isAcceptable = function (s) {
        return s.length === 5 && exports.numberRegexp.test(s);
    };
    return Validator;
}());
exports.Validator = Validator;
