"use strict";
var Clases;
(function (Clases) {
    var Humano = /** @class */ (function () {
        function Humano(gender, age) {
            this.Gender = gender;
            this.Age = age;
        }
        Object.defineProperty(Humano.prototype, "Gender", {
            get: function () {
                return this.gender;
            },
            set: function (v) {
                this.gender = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Humano.prototype, "Age", {
            get: function () {
                return this.age;
            },
            set: function (v) {
                this.age = v;
            },
            enumerable: true,
            configurable: true
        });
        return Humano;
    }());
    Clases.Humano = Humano;
})(Clases || (Clases = {}));
