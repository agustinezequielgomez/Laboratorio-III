window.addEventListener('load', function() {
    boton = document.getElementById('armarTabla');
    boton.addEventListener('click', traerPersonas);
});


function construirTabla(arrayDatos) {
    body = document.getElementsByTagName("body");
    tabla = document.createElement("table");
    tabla.setAttribute('id', 'tablaDatos');
    var cabecera = document.createElement("tr");
    cabecera.setAttribute('id', "tableHeaeder");
    for (atributo in arrayDatos[0]) {
        header = document.createElement("th");
        header.appendChild(document.createTextNode(atributo));
        cabecera.appendChild(header);
    }
    tabla.appendChild(cabecera);

    for (dato of arrayDatos) {
        var fila = document.createElement("tr");
        fila.setAttribute('class', 'personas');
        var atributosExtra = DetectarAtributos(dato, cabecera.childNodes);
        if (atributosExtra != []) {
            for (atributoAgregar of atributosExtra) {
                th = document.createElement('th');
                th.appendChild(document.createTextNode(atributoAgregar));
                cabecera.appendChild(th);
            }
        }
        for (atributo in dato) {
            td = document.createElement("td");
            td.appendChild(document.createTextNode(dato[atributo]));
            fila.appendChild(td);
        }
        fila.addEventListener('click', seleccionarRegistro);
        tabla.appendChild(fila);
    }
    document.body.appendChild(tabla);
}

function seleccionarRegistro() {
    var body = document.getElementsByTagName('body');
    for (hijos of body[0].children) {
        console.log(hijos.nodeName);
        if (hijos.nodeName == "FORM") {
            return -1;
        }
    }
    var formulario = document.createElement('form');
    var groupBox = document.createElement('fieldset');
    var legend = document.createElement('legend');
    legend.appendChild(document.createTextNode('Datos personales'));
    groupBox.appendChild(legend);
    var cabecera = document.getElementById("tableHeaeder");
    for (var i = 0; i < cabecera.childElementCount; i++) {
        var label = document.createElement('label');
        var texto = document.createTextNode(cabecera.children[i].innerText);
        label.appendChild(texto);
        groupBox.appendChild(label);
        var input = document.createElement('input');
        input.setAttribute('value', (this.children[i].innerText));
        input.setAttribute('class', 'formInputs');
        if (cabecera.children[i].innerText == "id") {
            input.setAttribute('disabled', 'true');
        }
        groupBox.appendChild(input);
        groupBox.appendChild(document.createElement('br'));
    }
    formulario.appendChild(groupBox);
    var boton = document.createElement('button');
    boton.appendChild(document.createTextNode('Actualizar'));
    boton.setAttribute('type', 'button');
    boton.addEventListener('click', actualizarRegistro);
    groupBox.appendChild(boton);
    document.body.appendChild(formulario);
}

function actualizarRegistro() {
    console.log(this);
    var inputs = document.getElementsByClassName('formInputs');
    var fila = buscarRegistro(inputs[0].value);
    for (var i = 1; i < fila.childElementCount; i++) {
        fila.children[i].innerText = inputs[i].value;
    }
    document.body.removeChild(this.parentElement.parentElement);
    ReArmarTabla();
}

function buscarRegistro(id) {
    var tabla = document.getElementById('tablaDatos');
    for (filas of tabla.children) {
        for (celdas of filas.children) {
            if (id == celdas.innerText) {
                return filas;
            }
        }
    }
}

function DetectarAtributos(objeto, atributos) {
    var keys = Object.keys(objeto);
    var retorno = [];
    var flag;
    for (valor of keys) {
        flag = false;
        for (val of atributos) {
            if (val.innerText == valor) {
                flag = true;
                break;
            }
        }
        if (flag == false) {
            retorno.push(valor);
        }
    }
    return retorno;
}

function ReArmarTabla() {
    var header = document.getElementById('tableHeaeder');
    var personas = document.getElementsByClassName('personas');
    var columnas = [];
    var retorno = "";
    for (cols of header.children) {
        columnas.push(cols.innerText);
    }
    for (persona of personas) {
        retorno += "{";
        for (var i = 0; i < columnas.length; i++) {
            retorno += columnas[i] + ":" + persona.children[i].innerText;
            if (i + 1 < columnas.length) {
                retorno += ",";
            }
        }
        retorno += "},";
    }
    console.log(JSON.stringify(retorno));
    return retorno;
}