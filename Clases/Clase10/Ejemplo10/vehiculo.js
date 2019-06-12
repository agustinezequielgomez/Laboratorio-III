"use strict";
var clases;
(function (clases) {
    var vehiculo //Hay que hacerle export para que pueda ser vista desde el namespace u otros archivos
     = /** @class */ (function () {
        function vehiculo(a, b) {
            this.marca = a;
            this.ruedas = b;
        }
        return vehiculo;
    }());
    clases.vehiculo = vehiculo;
})(clases || (clases = {}));
