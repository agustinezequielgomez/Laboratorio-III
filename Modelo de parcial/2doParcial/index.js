"use strict";
$(document).ready(function () {
    InicializarPagina();
});
function InicializarPagina() {
    $('body').css("background-color", "rgb(96, 160, 245)");
    var container = $('<div class="container">').appendTo('body');
    var row = $('<div class="row">');
    var header = $('<header>');
    var img = $('<img src="./images/free-people-icon-vector.jpg" class="img-fluid">');
    header.append(img);
    var botonAgregar = $('<button class="btn btn-primary">Agregar</button>');
    botonAgregar.click(agregarPersona);
    row.append(header);
    container.append(row);
    row = $('<div class="row">');
    row.append(botonAgregar);
    container.append(row);
    crearForm();
}
function crearForm() {
    var atributos = ["id", "first_name", "last_name", "email", "gender", "active"];
    var container = $('<div class="d-flex justify-content-center">');
    var formulario = $('<form>');
    var formularioCheckbox = $('<div class="form-check">');
    var row = $('<div class="row">');
    row.appendTo(formularioCheckbox);
    atributos.forEach(function (atributo) {
        var col = $('<div class="col sm-1">');
        var label = $('<label>');
        label.val(atributo);
        label.attr('id', atributo + "Label");
        var check = $('<input>');
        check.attr('type', 'checkbox');
        col.append(label);
        row.append(col);
        col = $('<div class="col sm-1">');
        col.append(check);
        row.append(col);
    });
    formulario.append(formularioCheckbox);
    container.append(formulario);
    container.append('body');
}
function crearTabla() {
    var tabla = $('<table class="table">');
}
function agregarPersona() {
}
