var data = [{"id":1,"first_name":"Walliw","last_name":"Spurden","email":"wspurden0@reverbnation.com","gender":"Female","active":"true"},{"id":2,"first_name":"Calley","last_name":"Albion","email":"calbion1@goodreads.com","gender":"Female","active":"false"},{"first_name":"Juan","last_name":"Shearsby","email":"jshearsby2@discovery.com","gender":"Female","active":"true","id":"3"},{"id":4,"first_name":"Carlyn","last_name":"Jarnell","email":"cjarnell3@dedecms.com","gender":"Female","active":"true"},{"id":5,"first_name":"Maegan","last_name":"Lowbridge","email":"mlowbridge4@drupal.org","gender":"Female","active":"false"},{"id":6,"first_name":"Ambur","last_name":"Aloway","email":"aaloway5@pinterest.com","gender":"Female","active":"true"},{"id":7,"first_name":"Merola","last_name":"Bartocci","email":"mbartocci6@mozilla.com","gender":"Female","active":"false"},{"id":8,"first_name":"Phelia","last_name":"Vaz","email":"pvaz7@linkedin.com","gender":"Female","active":"false"},{"first_name":"gggg","last_name":"Stibbs","email":"lstibbs8@reddit.com","gender":"Male","active":"true","id":"9"},{"id":10,"first_name":"Brockie","last_name":"Tulleth","email":"btulleth9@flavors.me","gender":"Male","active":"false"},{"first_name":"Persona","last_name":"Nueva","email":"email","gender":"Female","active":false,"id":11},{"first_name":"Test","last_name":"asdasd","email":"asda","gender":"Female","active":false,"id":"12"}];
var lista;

$(document).ready(()=>
{
    agregarContainer();
    if(localStorage.getItem('personas')==null)
    {
        localStorage.setItem('personas',JSON.stringify(data));
    }
    else
    {
        lista = localStorage.getItem('personas');
    }
    setTimeout(()=>
    {
        actualizarTabla();
        $('.spinner-border').hide();
    },500);
    $('#btnAlta').click(crearFormulario);
});

//Creacion del DOM-----------------------------------------------------------------------------------------------
function agregarContainer()
{
    $('<div class="container-fluid">').prependTo('body');
    $('header').appendTo('.container-fluid');
    $('nav').appendTo('.container-fluid');
}

function crearHeader(tabla)
{
    var header = $('<tr>');
    var theader = $('<thead class="thead-dark" id="theader">');
    var atributos = [];
    for(atributo in lista[0])
    {
        atributos.push(atributo);
        var th = $('<th class="text-center">');
        th.append(atributo);
        header.append(th);
    }
    theader.append(header);
    tabla.append(theader);
    console.log(atributos);
    return crearBody(tabla,atributos);

}

function crearBody(tabla,atributos)
{
    console.log(atributos);
    var tbody = $('<tbody id="bodyTabla">');
    for(persona of lista)
    {
        if(persona.active == "false")
        {
            continue;
        }
        var tr = $('<tr id="tableRow">');
        for(atributo of atributos)
        {
            var td = $('<td id="'+atributo+'">');
            td.append(persona[atributo]);
            tr.append(td);
        }
        tr.click(crearFormulario);
        tbody.append(tr);
    }
    tabla.append(tbody);
    return tabla;
}

function actualizarTabla() 
{
    lista = JSON.parse(localStorage.getItem('personas'));
    var containerTabla = $('<div class="table-responsive">');
    var tabla = $('<table class="table table-bordered" id="tablaLista">');
    tabla = crearHeader(tabla);
    tabla.appendTo(containerTabla);
    $('.container-fluid').append(containerTabla);
}



function crearFormulario()
{
    if($('.frmAlta').length>0)
    {
        return false;
    }
    var formulario = $('<form class="frmAlta align-self-center">');
    var atributos = getAttribs();
    atributos.forEach((atributo)=>
    {
        if(atributo == "active"||atributo=="gender")
        {
            return;
        }
        var formGroupRow = $('<div class="form-group row align-items-center">');
        var col = $('<div class="col-sm-12">');
        var label = $('<label id="'+atributo+'Label" for="'+atributo+'Input">');
        var input = $('<input type="text" class="form-control" id="'+atributo+'Input" required="required">');
        label.text(atributo);
        label.appendTo(col);
        input.appendTo(col);
        col.appendTo(formGroupRow);
        formGroupRow.appendTo(formulario);
        $('.container-fluid').append(formulario);
        if(this.id == "tableRow")
        {
            $('#'+atributo+'Input').val(($(this).find('#'+atributo)).text())
        }
        if(atributo == 'id')
        {
            input.attr('disabled','true');
        }
    });
    agregarRadioButtons(this);
    $(formulario).append('<div class="form-group row align-items-center" id="botones">');
    agregarBotonCancelar(this);
    agregarBotonEnviar(this);
    agregarBotonesRow(this);
}

function agregarBotonEnviar(caller)
{
    if(caller.id == 'btnAlta')
    {
        var col = $('<div class="col-lg-6">');
        var Enviar = $('<button type="button" class="btn btn-success form-control">Enviar</button>');
        Enviar.click(altaPersona);
        Enviar.appendTo(col);
        col.appendTo('#botones');
    }
}

function agregarBotonesRow(caller)
{
    if(caller.id == 'tableRow')
    {
        var botones = ["Eliminar","Modificar"];
        for(boton of botones)
        {
            var col = $('<div class="col-lg-4" >');
            var button = $('<button type="button" class="btn btn-primary form-control" id="'+boton+'Btn">'+boton+'</button>');
            if(boton == "Eliminar")
            {
                button.click(eliminacionPersona);
            }
            else if(boton == "Modificar")
            {
                button.click(modificacionPersona);
            }
            button.appendTo(col);
            col.appendTo('#botones');
        }
    }
}

function agregarBotonCancelar(caller)
{
    var largo = 6;
    if(caller.id == 'tableRow')
    {
        largo = 4;
    }
    var col = $('<div class="col-lg-'+largo+'">');
    var Cancelar = $('<button type="button" class="btn btn-danger form-control">Cancelar</button>');
    Cancelar.click(cerrarForm);
    Cancelar.appendTo(col);
    col.appendTo('#botones');
}

function agregarRadioButtons(caller)
{
    var row = $('<div class="form-group">');
    var formGroup = $('<div class="form-row align-items-center">');
    var labelValor = ["F","M"];
    var id = ["Female","Male"];
    for(var i = 0; i<labelValor.length;i++)
    {
        var label = $('<label class="radio-inline col-sm-6" id="genderLabel">'+labelValor[i]+'</label>');
        var input = $('<input type="radio" name="gender" value="'+id[i]+'" class="form-control" id="'+id[i]+'">');
        cargarRadioButtons(this);
        input.appendTo(label);
        label.appendTo(formGroup);
    }
    formGroup.appendTo(row);
    row.appendTo('.frmAlta');
    cargarRadioButtons(caller);
}

function cargarRadioButtons(caller)
{
    if(caller.id == 'tableRow')
    {
        if(($(caller).find('#gender')).text()=="Female")
        {
            $('#Female').prop("checked",true);
        }
        else if(($(caller).find('#gender')).text()=="Male")
        {
            $('#Male').prop('checked',true);

        }
    }
}

//---------------------------------------------------------------------------------------------------------------
//Funciones generales--------------------------------------------------------------------------------------------
function getAttribs()
{
    var header = $('#theader').children().children();
    var attribs = [];
    for(th of header)
    {
        attribs.push(th.innerText);
    }
    return attribs;
}

function cerrarForm()
{
    $('.frmAlta').remove();
}

function removerObjetos()
{
    cerrarForm();
    $('#tablaLista').remove();   
}

function validarCampos()
{
    var atributos = getAttribs();
    for(atributo of atributos)
    {
        if(atributo == 'id')
        {
            continue;
        }
        if($('#'+atributo+'Input').val()==''||$('#'+atributo+'Input').val()==' ')
        {
            return -1;
        }
    }
    return 0;
}

function traerUltimoId()
{
    var personas = JSON.parse(localStorage.getItem('personas'));
    return personas.map((persona)=>
    {
        return persona.id;
    })
    .reduce((maximo,actual)=>
    {
        if(actual >maximo)
        {
            maximo = actual;
        }
        return maximo;
    });
}
//------------------------------------------------------------------------------------------------------------------------------------------------------

//ABM local storage-------------------------------------------------------------------------------------------------------------------------------------
function altaPersona() 
{
    if(validarCampos()!=0)
    {
        alert("Es necesario ingresar todos los campos antes de continuar.");
        return -1;
    }
    var persona = {};
    var atributos = getAttribs();
    atributos.forEach((atributo)=>
    {
        if(atributo=="gender")
        {
            persona[atributo] = $('input[name=gender]:checked').val();
            return;
        }
        persona[atributo] = $('#'+atributo+'Input').val();
    });
    persona.id = parseInt(traerUltimoId())+1;
    persona.active= true;
    guardarPersona(persona);
    removerObjetos();
    actualizarTabla();
}

function guardarPersona(persona)
{
    var personas = JSON.parse(localStorage.getItem('personas'));
    personas.push(persona);
    localStorage.removeItem('personas');
    localStorage.setItem('personas',JSON.stringify(personas));
}

function eliminacionPersona() 
{
    var inputs = document.getElementsByClassName('inputForm');
    if(confirm("¿Desea eliminar a " + $('#first_nameInput').val() +", " +$('#last_nameInput').val()+"?"))
    {
        eliminarPersona($('#idInput').val());
        removerObjetos();        
        actualizarTabla();
    }
}

function eliminarPersona(id)
{
    personas = JSON.parse(localStorage.getItem('personas'));
    personas.forEach((persona)=>
    {
        if(persona.id == id)
        {
            persona.active = "false";
            return;
        }
    });
    localStorage.removeItem('personas');
    localStorage.setItem('personas',JSON.stringify(personas));
}

function modificacionPersona() 
{
    if(validarCampos()!=0)
    {
        alert("Es necesario ingresar todos los campos antes de continuar.");
        return -1;
    }
    var personas = JSON.parse(localStorage.getItem('personas'));
    var atributos = getAttribs();
    for(persona of personas)
    {
        if(persona.id == $('#idInput').val())
        {
            for(atributo of atributos)
            {
                if(atributo == "gender")
                {
                    persona[atributo] = $('input[name=gender]:checked').val();
                    continue;
                }
                persona[atributo] = $('#'+atributo+'Input').val();
            }
            persona.active="true";
            break;
        }
    }
    console.log(personas);
    localStorage.removeItem('personas');
    localStorage.setItem('personas',JSON.stringify(personas));
    removerObjetos();
    actualizarTabla();
}