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
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, edad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    Object.defineProperty(Persona.prototype, "Nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (v) {
            this._nombre = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Apellido", {
        get: function () {
            return this._apellido;
        },
        set: function (v) {
            this._apellido = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Edad", {
        get: function () {
            return this._edad;
        },
        set: function (v) {
            this._edad = v;
        },
        enumerable: true,
        configurable: true
    });
    Persona.prototype.presentarse = function () {
        console.log("Hola soy " + this._nombre + " " + this._apellido);
    };
    return Persona;
}());
var p1 = new Persona("Juan", "Perez", 23);
p1.Nombre = "Ana";
p1.presentarse(); //No puedo acceder al metodo porque es protected
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, apellido, edad, sueldo) {
        var _this = _super.call(this, nombre, apellido, edad) || this;
        _this.sueldo = sueldo;
        return _this;
    }
    Empleado.prototype.presentarse = function () {
        _super.prototype.presentarse.call(this);
    };
    Empleado.prototype.toJSON = function () {
        return "{\"nombre\":" + this.Nombre + ", \"apellido\":" + this.Apellido + ", \"edad\":" + this.Edad + "}";
    };
    return Empleado;
}(Persona));
var empleado1 = new Empleado("Jose", "Lopez", 50, 15000);
console.log(empleado1.toJSON());
