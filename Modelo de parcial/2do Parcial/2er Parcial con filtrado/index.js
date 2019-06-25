var data = [{"id":1,"age":23,"first_name":"Walliw","last_name":"Spurden","email":"wspurden0@reverbnation.com","gender":"Female","active":"true"},{"id":2,"age":54,"first_name":"Calley","last_name":"Albion","email":"calbion1@goodreads.com","gender":"Female","active":"false"},{"first_name":"Juan","age":18,"last_name":"Shearsby","email":"jshearsby2@discovery.com","gender":"Female","active":"true","id":"3"},{"id":4,"age":65,"first_name":"Carlyn","last_name":"Jarnell","email":"cjarnell3@dedecms.com","gender":"Female","active":"true"},{"id":5,"age":55,"first_name":"Maegan","last_name":"Lowbridge","email":"mlowbridge4@drupal.org","gender":"Female","active":"false"},{"id":6,"age":77,"first_name":"Ambur","last_name":"Aloway","email":"aaloway5@pinterest.com","gender":"Female","active":"true"},{"id":7,"age":43,"first_name":"Merola","last_name":"Bartocci","email":"mbartocci6@mozilla.com","gender":"Female","active":"false"},{"id":8,"age":22,"first_name":"Phelia","last_name":"Vaz","email":"pvaz7@linkedin.com","gender":"Female","active":"false"},{"first_name":"gggg","age":43,"last_name":"Stibbs","email":"lstibbs8@reddit.com","gender":"Male","active":"true","id":"9"},{"id":10,"age":10,"first_name":"Brockie","last_name":"Tulleth","email":"btulleth9@flavors.me","gender":"Male","active":"false"},{"first_name":"Persona","age":33,"last_name":"Nueva","email":"email","gender":"Female","active":"true","id":11},{"first_name":"Test","age":80,"last_name":"asdasd","email":"asda","gender":"Female","active":"true","id":"12"}];
var lista;
//Manejador pagina------------------------------------------------------------------------------------------------------------------
$(document).ready(()=>
{
    agregarContainer();
    agregarSelect();
    if(localStorage.getItem('personas')==null)
    {
        localStorage.setItem('personas',JSON.stringify(data));
    }
    else
    {
        lista = localStorage.getItem('personas');
    }
    $('#btnAlta').click(crearFormulario);
    setTimeout(()=>
    {
        updatePage();
        $('.spinner-border').hide();
    },500);
});

function updatePage()
{
    $('.form-check').remove();
    actualizarTabla();
    agregarColumnFilter();
    calcularPromedioEdad();
    personaMasVieja();
}
//-------------------------------------------------------------------------------------------------------------------------------------

//Creacion del DOM--------------------------------------------------------------------------------------------------------------------
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
        var th = $('<th class="text-center" id="'+atributo+'">');
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
    lista = obtenerPersonasFiltradas();
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
        cargarRadioButtons(caller);
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

function agregarSelect()
{
    var form = $('<form class="align-self-center" id="frmSelect">');
    var titles = ["Filtrar por tipo","Promedio de edad","Persona mas vieja"];
    var id= ["typeFilter","ageAvg","masGrande"];
    var row = $('<div class="form-group form-row">').css('background-color','rgb(67, 82, 221)');
    for(var i=0;i<titles.length;i++)
    {
        var col = $('<div class="form-group col-sm-4">');
        if(titles[i]=="Filtrar por tipo")
        {
            var label = $('<label class="form-label">');
            label.append(titles[i]);
            var input = $('<select class="form-control" id="'+id[i]+'">');
            input.append('<option>Seleccionar uno</option>');
            input.append('<option>Male</option>');
            input.append('<option>Female</option>');
            input.change(calcularPromedioEdad);
            input.change(personaMasVieja);
            input.change(()=>
            {
                $('.table-responsive').remove();
                actualizarTabla();
            });
            label.appendTo(col);
            input.appendTo(col);
        }
        else
        {
            var label = $('<label class="form-label">');
            label.append(titles[i]);
            var input = $('<input type="text" class="form-control" id="'+id[i]+'" disabled="disabled">');
            label.appendTo(col);
            input.appendTo(col);
        }
        col.appendTo(row);
        row.appendTo(form);
    }
    form.appendTo('.container-fluid');
}

function agregarColumnFilter()
{
    var form = $('#frmSelect');
    var row = $('<div class="form-group form-row">').css('background-color','rgb(221, 67, 98)');
    atributos = getAttribs();
    for(atributo of atributos)
    {
        var formCheck = $('<div class="form-check col-xl-1">');
        var label = $('<label>');
        label.append(atributo);
        var check = $('<input type="checkbox" class="form-check-input" id="'+atributo+'Check">');
        check.prop('checked',true);
        check.change(actualizarColumnas);
        check.appendTo(formCheck);
        label.appendTo(formCheck);
        formCheck.appendTo(row);
    }
    row.appendTo(form);
}

function actualizarColumnas()
{
    var atributos = getAttribs();
    for(atributo of atributos)
    {
        if($('#'+atributo+'Check').prop('checked')==false)
        {
            $('th#'+atributo).hide();
            $('td#'+atributo).hide();
        }
        else
        {
            $('th#'+atributo).show();
            $('td#'+atributo).show();
        }
    }
}
//--------------------------------------------------------------------------------------------------------------------------------


//Funciones generales-------------------------------------------------------------------------------------------------------------
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

function obtenerPersonasFiltradas()
{
    var personas = JSON.parse(localStorage.getItem('personas'));
    var listadoFiltrado = personas.filter((persona)=>
    {
        return (persona.active=="true");
    });
    if($('#typeFilter').val()=="Male")
    {
        var listadoFiltrado = listadoFiltrado.filter((persona)=>
        {
            return (persona.gender=="Male");
        });
    }
    else if($('#typeFilter').val()=="Female")
    {
        var listadoFiltrado = listadoFiltrado.filter((persona)=>
        {
            return (persona.gender=="Female");
        });
    }
    return listadoFiltrado;
}
//---------------------------------------------------------------------------------------------------------------------

//ABM Local Storage----------------------------------------------------------------------------------------------------
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
    persona.active= "true";
    guardarPersona(persona);
    removerObjetos();
    updatePage();
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
    if(confirm("¿Desea eliminar a " + $('#first_nameInput').val() +", " +$('#last_nameInput').val()+"?"))
    {
        eliminarPersona($('#idInput').val());
        removerObjetos();        
        updatePage();
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
    updatePage();
}
//-----------------------------------------------------------------------------------------------------------


//Map/Reduce/Filter-----------------------------------------------------------------------------------------
function calcularPromedioEdad()
{
    var contador = 0;
    var listadoFiltrado = obtenerPersonasFiltradas();
    var promedio = listadoFiltrado.map((persona)=>
    {
        return persona.age;
    })
    .reduce((acumulado,actual)=>
    {
        contador++;
        return acumulado += parseInt(actual);
    },0);
    $('#ageAvg').val((promedio/contador));
}

function personaMasVieja()
{
    var listadoFiltrado = obtenerPersonasFiltradas();
    var personaMasVieja = listadoFiltrado.reduce((maximo,actual)=>
    {
        if(parseInt(actual.age) > parseInt(maximo.age))
        {
            maximo = actual;
        }
        return maximo;
    });
    var oldest = [personaMasVieja];
    personaMasVieja = oldest.map((persona)=>
    {
        return persona.first_name;
    });
    $('#masGrande').val(personaMasVieja);
}
//-------------------------------------------------------------------------------------------------------------