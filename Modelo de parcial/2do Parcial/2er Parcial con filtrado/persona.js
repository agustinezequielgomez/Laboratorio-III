"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Clases;
(function (Clases) {
    var Persona = /** @class */ (function (_super) {
        __extends(Persona, _super);
        function Persona(id, nombre, apellido, email, age, gender) {
            var _this = _super.call(this, gender, age) || this;
            _this.apellido = apellido;
            _this.nombre = nombre;
            _this.email = email;
            _this.id = id;
            return _this;
        }
        Object.defineProperty(Persona.prototype, "id", {
            get: function () {
                return this._id;
            },
            set: function (v) {
                this._id = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "nombre", {
            get: function () {
                return this._nombre;
            },
            set: function (v) {
                this._nombre = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "apellido", {
            get: function () {
                return this._apellido;
            },
            set: function (v) {
                this._apellido = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "email", {
            get: function () {
                return this._email;
            },
            set: function (v) {
                this._email = v;
            },
            enumerable: true,
            configurable: true
        });
        return Persona;
    }(Clases.Humano));
    Clases.Persona = Persona;
})(Clases || (Clases = {}));
