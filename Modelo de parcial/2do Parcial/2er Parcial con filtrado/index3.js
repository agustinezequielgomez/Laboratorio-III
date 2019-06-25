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
/// <reference path="persona.ts" />
var data = [{ "id": 1, "age": 23, "first_name": "Walliw", "last_name": "Spurden", "email": "wspurden0@reverbnation.com", "gender": "Female", "active": "true" }, { "id": 2, "age": 54, "first_name": "Calley", "last_name": "Albion", "email": "calbion1@goodreads.com", "gender": "Female", "active": "false" }, { "first_name": "Juan", "age": 18, "last_name": "Shearsby", "email": "jshearsby2@discovery.com", "gender": "Female", "active": "true", "id": "3" }, { "id": 4, "age": 65, "first_name": "Carlyn", "last_name": "Jarnell", "email": "cjarnell3@dedecms.com", "gender": "Female", "active": "true" }, { "id": 5, "age": 55, "first_name": "Maegan", "last_name": "Lowbridge", "email": "mlowbridge4@drupal.org", "gender": "Female", "active": "false" }, { "id": 6, "age": 77, "first_name": "Ambur", "last_name": "Aloway", "email": "aaloway5@pinterest.com", "gender": "Female", "active": "true" }, { "id": 7, "age": 43, "first_name": "Merola", "last_name": "Bartocci", "email": "mbartocci6@mozilla.com", "gender": "Female", "active": "false" }, { "id": 8, "age": 22, "first_name": "Phelia", "last_name": "Vaz", "email": "pvaz7@linkedin.com", "gender": "Female", "active": "false" }, { "first_name": "gggg", "age": 43, "last_name": "Stibbs", "email": "lstibbs8@reddit.com", "gender": "Male", "active": "true", "id": "9" }, { "id": 10, "age": 10, "first_name": "Brockie", "last_name": "Tulleth", "email": "btulleth9@flavors.me", "gender": "Male", "active": "false" }, { "first_name": "Persona", "age": 33, "last_name": "Nueva", "email": "email", "gender": "Female", "active": "true", "id": 11 }, { "first_name": "Test", "age": 80, "last_name": "asdasd", "email": "asda", "gender": "Female", "active": "true", "id": "12" }];
var lista;
//Manejador pagina------------------------------------------------------------------------------------------------------------------
$(document).ready(function () {
    agregarContainer();
    agregarSelect();
    if (localStorage.getItem('personas') == null) {
        localStorage.setItem('personas', JSON.stringify(crearArrayPersonas()));
    }
    else {
        lista = localStorage.getItem('personas');
    }
    $('#btnAlta').click(crearFormulario);
    setTimeout(function () {
        updatePage();
        $('.spinner-border').hide();
    }, 500);
    crearArrayPersonas();
});
function updatePage() {
    $('.form-check').remove();
    actualizarTabla();
    agregarColumnFilter();
    calcularPromedioEdad();
    personaMasVieja();
}
function crearArrayPersonas() {
    var arrayPersonas = [];
    data.forEach(function (personaData) {
        var persona = new Clases.Persona(personaData.id, personaData.first_name, personaData.last_name, personaData.email, personaData.age, personaData.gender);
        console.log(Object.keys(persona));
        arrayPersonas.push(persona);
    });
    return arrayPersonas;
}
//-------------------------------------------------------------------------------------------------------------------------------------
//Creacion del DOM--------------------------------------------------------------------------------------------------------------------
function agregarContainer() {
    $('<div class="container-fluid">').prependTo('body');
    $('header').appendTo('.container-fluid');
    $('nav').appendTo('.container-fluid');
}
function crearHeader(tabla) {
    var header = $('<tr>');
    var theader = $('<thead class="thead-dark" id="theader">');
    var atributos = [];
    for (var atributo in lista[0]) {
        atributos.push(atributo);
        var th = $('<th class="text-center" id="' + atributo + '">');
        th.append(atributo);
        header.append(th);
    }
    theader.append(header);
    tabla.append(theader);
    console.log(atributos);
    return crearBody(tabla, atributos);
}
function crearBody(tabla, atributos) {
    lista = obtenerPersonasFiltradas();
    var tbody = $('<tbody id="bodyTabla">');
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var persona = lista_1[_i];
        if (persona.active == "false") {
            continue;
        }
        var tr = $('<tr id="tableRow">');
        for (var _a = 0, atributos_1 = atributos; _a < atributos_1.length; _a++) {
            var atributo = atributos_1[_a];
            var td = $('<td id="' + atributo + '">');
            td.append(persona[atributo]);
            tr.append(td);
        }
        tr.click(crearFormulario);
        tbody.append(tr);
    }
    tabla.append(tbody);
    return tabla;
}
function actualizarTabla() {
    lista = JSON.parse(localStorage.getItem('personas'));
    var containerTabla = $('<div class="table-responsive">');
    var tabla = $('<table class="table table-bordered" id="tablaLista">');
    tabla = crearHeader(tabla);
    tabla.appendTo(containerTabla);
    $('.container-fluid').append(containerTabla);
}
function crearFormulario() {
    var _this = this;
    if ($('.frmAlta').length > 0) {
        return false;
    }
    var formulario = $('<form class="frmAlta align-self-center">');
    var atributos = getAttribs();
    atributos.forEach(function (atributo) {
        if (atributo == "active" || atributo == "gender") {
            return;
        }
        var formGroupRow = $('<div class="form-group row align-items-center">');
        var col = $('<div class="col-sm-12">');
        var label = $('<label id="' + atributo + 'Label" for="' + atributo + 'Input">');
        var input = $('<input type="text" class="form-control" id="' + atributo + 'Input" required="required">');
        label.text(atributo);
        label.appendTo(col);
        input.appendTo(col);
        col.appendTo(formGroupRow);
        formGroupRow.appendTo(formulario);
        $('.container-fluid').append(formulario);
        if (_this.id == "tableRow") {
            $('#' + atributo + 'Input').val(($(_this).find('#' + atributo)).text());
        }
        if (atributo == 'id') {
            input.attr('disabled', 'true');
        }
    });
    agregarRadioButtons(this);
    $(formulario).append('<div class="form-group row align-items-center" id="botones">');
    agregarBotonCancelar(this);
    agregarBotonEnviar(this);
    agregarBotonesRow(this);
}
function agregarBotonEnviar(caller) {
    if (caller.id == 'btnAlta') {
        var col = $('<div class="col-sm-6">');
        var Enviar = $('<button type="button" class="btn btn-success form-control">Enviar</button>');
        Enviar.click(altaPersona);
        Enviar.appendTo(col);
        col.appendTo('#botones');
    }
}
function agregarBotonesRow(caller) {
    if (caller.id == 'tableRow') {
        var botones = ["Eliminar", "Modificar"];
        for (var _i = 0, botones_1 = botones; _i < botones_1.length; _i++) {
            var boton = botones_1[_i];
            var col = $('<div class="col-sm-4" >');
            var button = $('<button type="button" class="btn btn-primary form-control" id="' + boton + 'Btn">' + boton + '</button>');
            if (boton == "Eliminar") {
                button.click(eliminacionPersona);
            }
            else if (boton == "Modificar") {
                button.click(modificacionPersona);
            }
            button.appendTo(col);
            col.appendTo('#botones');
        }
    }
}
function agregarBotonCancelar(caller) {
    var largo = 6;
    if (caller.id == 'tableRow') {
        largo = 4;
    }
    var col = $('<div class="col-sm-' + largo + '">');
    var Cancelar = $('<button type="button" class="btn btn-danger form-control">Cancelar</button>');
    Cancelar.click(cerrarForm);
    Cancelar.appendTo(col);
    col.appendTo('#botones');
}
function agregarRadioButtons(caller) {
    var row = $('<div class="form-group">');
    var formGroup = $('<div class="form-row align-items-center">');
    var labelValor = ["F", "M"];
    var id = ["Female", "Male"];
    for (var i = 0; i < labelValor.length; i++) {
        var label = $('<label class="radio-inline col-sm-6" id="genderLabel">' + labelValor[i] + '</label>');
        var input = $('<input type="radio" name="gender" value="' + id[i] + '" class="form-control" id="' + id[i] + '">');
        cargarRadioButtons(caller);
        input.appendTo(label);
        label.appendTo(formGroup);
    }
    formGroup.appendTo(row);
    row.appendTo('.frmAlta');
    cargarRadioButtons(caller);
}
function cargarRadioButtons(caller) {
    if (caller.id == 'tableRow') {
        if (($(caller).find('#gender')).text() == "Female") {
            $('#Female').prop("checked", true);
        }
        else if (($(caller).find('#gender')).text() == "Male") {
            $('#Male').prop('checked', true);
        }
    }
}
function agregarSelect() {
    var form = $('<form class="align-self-center" id="frmSelect">');
    var titles = ["Filtrar por tipo", "Promedio de edad", "Persona mas vieja"];
    var id = ["typeFilter", "ageAvg", "masGrande"];
    var row = $('<div class="form-group form-row">').css('background-color', 'rgb(67, 82, 221)');
    for (var i = 0; i < titles.length; i++) {
        var col = $('<div class="form-group col-sm-4">');
        if (titles[i] == "Filtrar por tipo") {
            var label = $('<label class="form-label">');
            label.append(titles[i]);
            var input = $('<select class="form-control" id="' + id[i] + '">');
            input.append('<option>Seleccionar uno</option>');
            input.append('<option>Male</option>');
            input.append('<option>Female</option>');
            input.change(calcularPromedioEdad);
            input.change(personaMasVieja);
            input.change(function () {
                $('.table-responsive').remove();
                actualizarTabla();
            });
            label.appendTo(col);
            input.appendTo(col);
        }
        else {
            var label = $('<label class="form-label">');
            label.append(titles[i]);
            var input = $('<input type="text" class="form-control" id="' + id[i] + '" disabled="disabled">');
            label.appendTo(col);
            input.appendTo(col);
        }
        col.appendTo(row);
        row.appendTo(form);
    }
    form.appendTo('.container-fluid');
}
function agregarColumnFilter() {
    var form = $('#frmSelect');
    var row = $('<div class="form-group form-row">').css('background-color', 'rgb(221, 67, 98)');
    var atributos = getAttribs();
    for (var _i = 0, atributos_2 = atributos; _i < atributos_2.length; _i++) {
        var atributo = atributos_2[_i];
        var formCheck = $('<div class="form-check col-xl-1">');
        var label = $('<label>');
        label.append(atributo);
        var check = $('<input type="checkbox" class="form-control" id="' + atributo + 'Check">');
        check.prop('checked', true);
        check.change(actualizarColumnas);
        check.appendTo(formCheck);
        label.appendTo(formCheck);
        formCheck.appendTo(row);
    }
    row.appendTo(form);
}
function actualizarColumnas() {
    var atributos = getAttribs();
    for (var _i = 0, atributos_3 = atributos; _i < atributos_3.length; _i++) {
        var atributo = atributos_3[_i];
        if ($('#' + atributo + 'Check').prop('checked') == false) {
            $('th#' + atributo).hide();
            $('td#' + atributo).hide();
        }
        else {
            $('th#' + atributo).show();
            $('td#' + atributo).show();
        }
    }
}
//--------------------------------------------------------------------------------------------------------------------------------
//Funciones generales-------------------------------------------------------------------------------------------------------------
function getAttribs() {
    var header = $('#theader').children().children();
    var attribs = [];
    for (var _i = 0, header_1 = header; _i < header_1.length; _i++) {
        var th = header_1[_i];
        attribs.push(th.innerText);
    }
    return attribs;
}
function cerrarForm() {
    $('.frmAlta').remove();
}
function removerObjetos() {
    cerrarForm();
    $('#tablaLista').remove();
}
function validarCampos() {
    var atributos = getAttribs();
    for (var _i = 0, atributos_4 = atributos; _i < atributos_4.length; _i++) {
        var atributo = atributos_4[_i];
        if (atributo == 'id') {
            continue;
        }
        if ($('#' + atributo + 'Input').val() == '' || $('#' + atributo + 'Input').val() == ' ') {
            return -1;
        }
    }
    return 0;
}
function traerUltimoId() {
    var personas = JSON.parse(localStorage.getItem('personas'));
    return personas.map(function (persona) {
        return persona.id;
    })
        .reduce(function (maximo, actual) {
        if (actual > maximo) {
            maximo = actual;
        }
        return maximo;
    });
}
function obtenerPersonasFiltradas() {
    var personas = JSON.parse(localStorage.getItem('personas'));
    var listadoFiltrado = personas.filter(function (persona) {
        return (persona.active == "true");
    });
    if ($('#typeFilter').val() == "Male") {
        listadoFiltrado = listadoFiltrado.filter(function (persona) {
            return (persona.gender == "Male");
        });
    }
    else if ($('#typeFilter').val() == "Female") {
        listadoFiltrado = listadoFiltrado.filter(function (persona) {
            return (persona.gender == "Female");
        });
    }
    return listadoFiltrado;
}
//---------------------------------------------------------------------------------------------------------------------
//ABM Local Storage----------------------------------------------------------------------------------------------------
function altaPersona() {
    if (validarCampos() != 0) {
        alert("Es necesario ingresar todos los campos antes de continuar.");
        return -1;
    }
    var persona = {};
    var atributos = getAttribs();
    atributos.forEach(function (atributo) {
        if (atributo == "gender") {
            persona[atributo] = $('input[name=gender]:checked').val();
            return;
        }
        persona[atributo] = $('#' + atributo + 'Input').val();
    });
    persona.id = parseInt(traerUltimoId()) + 1;
    persona.active = "true";
    guardarPersona(persona);
    removerObjetos();
    updatePage();
}
function guardarPersona(persona) {
    var personas = JSON.parse(localStorage.getItem('personas'));
    personas.push(persona);
    localStorage.removeItem('personas');
    localStorage.setItem('personas', JSON.stringify(personas));
}
function eliminacionPersona() {
    if (confirm("¿Desea eliminar a " + $('#first_nameInput').val() + ", " + $('#last_nameInput').val() + "?")) {
        eliminarPersona($('#idInput').val());
        removerObjetos();
        updatePage();
    }
}
function eliminarPersona(id) {
    var personas = JSON.parse(localStorage.getItem('personas'));
    personas.forEach(function (persona) {
        if (persona.id == id) {
            persona.active = "false";
            return;
        }
    });
    localStorage.removeItem('personas');
    localStorage.setItem('personas', JSON.stringify(personas));
}
function modificacionPersona() {
    if (validarCampos() != 0) {
        alert("Es necesario ingresar todos los campos antes de continuar.");
        return -1;
    }
    var personas = JSON.parse(localStorage.getItem('personas'));
    var atributos = getAttribs();
    for (var _i = 0, personas_1 = personas; _i < personas_1.length; _i++) {
        var persona = personas_1[_i];
        if (persona.id == $('#idInput').val()) {
            for (var _a = 0, atributos_5 = atributos; _a < atributos_5.length; _a++) {
                var atributo = atributos_5[_a];
                if (atributo == "gender") {
                    persona[atributo] = $('input[name=gender]:checked').val();
                    continue;
                }
                persona[atributo] = $('#' + atributo + 'Input').val();
            }
            persona.active = "true";
            break;
        }
    }
    localStorage.removeItem('personas');
    localStorage.setItem('personas', JSON.stringify(personas));
    removerObjetos();
    updatePage();
}
//-----------------------------------------------------------------------------------------------------------
//Map/Reduce/Filter-----------------------------------------------------------------------------------------
function calcularPromedioEdad() {
    var contador = 0;
    var listadoFiltrado = obtenerPersonasFiltradas();
    var promedio = listadoFiltrado.map(function (persona) {
        return persona.age;
    })
        .reduce(function (acumulado, actual) {
        contador++;
        return acumulado += parseInt(actual);
    }, 0);
    $('#ageAvg').val((promedio / contador));
}
function personaMasVieja() {
    var listadoFiltrado = obtenerPersonasFiltradas();
    var personaMasVieja = listadoFiltrado.reduce(function (maximo, actual) {
        if (parseInt(actual.age) > parseInt(maximo.age)) {
            maximo = actual;
        }
        return maximo;
    });
    var oldest = [personaMasVieja];
    personaMasVieja = oldest.map(function (persona) {
        return persona.first_name;
    });
    $('#masGrande').val(personaMasVieja);
}
//-------------------------------------------------------------------------------------------------------------
