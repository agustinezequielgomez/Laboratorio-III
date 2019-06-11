var Talle;
(function (Talle) {
    Talle[Talle["xs"] = 10] = "xs";
    Talle[Talle["s"] = 11] = "s";
    Talle[Talle["m"] = 10] = "m";
    Talle[Talle["l"] = 11] = "l";
    Talle[Talle["xl"] = 12] = "xl";
})(Talle || (Talle = {}));
console.log(Talle.xl);
console.log(Talle[10]); //Si hay dos enums con el mismo valor numerico muestra el ultimo valor siempre
