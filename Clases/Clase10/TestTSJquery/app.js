"use strict";
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
$(document).ready(function () {
    InicializarControles();
});
function InicializarControles() {
    ($('<div class="container">')).appendTo('body');
    ($('<form id="form">')).appendTo('.container');
    var labels = ["Pais", "Ciudad"];
    labels.forEach(function (etiqueta) {
        var row = ($('<div class="form-group">')).appendTo('.container');
        var col = ($('<div class="col-sm-1">')).appendTo(row);
        var label = $('<label>');
        label.attr({ id: etiqueta + "Label" });
        label.attr('for', etiqueta + "Label");
        label.text(etiqueta + ": ");
        label.appendTo(col);
        col = ($('<div class="col-sm-auto">')).appendTo(row);
        var select = $('<select>');
        select.attr({ id: etiqueta + "Select", class: 'form-control' });
        select.appendTo(col);
    });
    $('#PaisSelect').change(cargarCiudades);
    cargarControles();
}
function cargarControles() {
    var datos = data;
    var paises = datos.map(function (pais) {
        return pais.pais;
    });
    paises = paises.filter(onlyUnique);
    paises.forEach(function (pais) {
        var option = $('<option id="OptionPais">');
        option.text(pais);
        option.appendTo('#PaisSelect');
    });
    cargarCiudades();
}
function cargarCiudades() {
    $('#CiudadSelect').empty();
    var datos = data;
    var ciudades = datos
        .filter(function (ciudad) {
        return (ciudad.pais == $('#PaisSelect').val());
    })
        .map(function (ciudades) {
        return ciudades.ciudad;
    });
    console.log(ciudades);
    ciudades.forEach(function (ciudad) {
        var option = $('<option id="OptionCiudad">');
        option.text(ciudad);
        option.appendTo('#CiudadSelect');
    });
}
