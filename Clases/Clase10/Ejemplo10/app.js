"use strict";
var auto1 = new clases.Auto("Ford", 4);
console.log(auto1.marca);
//Para poder usar jQuery en TS usar npm install @types/jquery
$(document).ready(function () {
    var elemento = $('<p>');
    elemento.text("Marca: " + auto1.marca + ". Ruedas: " + auto1.ruedas);
    elemento.appendTo('body');
});
