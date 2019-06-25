var data = [{"id":1,"age":23,"first_name":"Walliw","last_name":"Spurden","email":"wspurden0@reverbnation.com","gender":"Female","active":"true"},{"id":2,"age":54,"first_name":"Calley","last_name":"Albion","email":"calbion1@goodreads.com","gender":"Female","active":"false"},{"first_name":"Juan","age":18,"last_name":"Shearsby","email":"jshearsby2@discovery.com","gender":"Female","active":"true","id":"3"},{"id":4,"age":65,"first_name":"Carlyn","last_name":"Jarnell","email":"cjarnell3@dedecms.com","gender":"Female","active":"true"},{"id":5,"age":55,"first_name":"Maegan","last_name":"Lowbridge","email":"mlowbridge4@drupal.org","gender":"Female","active":"false"},{"id":6,"age":77,"first_name":"Ambur","last_name":"Aloway","email":"aaloway5@pinterest.com","gender":"Female","active":"true"},{"id":7,"age":43,"first_name":"Merola","last_name":"Bartocci","email":"mbartocci6@mozilla.com","gender":"Female","active":"false"},{"id":8,"age":22,"first_name":"Phelia","last_name":"Vaz","email":"pvaz7@linkedin.com","gender":"Female","active":"false"},{"first_name":"gggg","age":43,"last_name":"Stibbs","email":"lstibbs8@reddit.com","gender":"Male","active":"true","id":"9"},{"id":10,"age":10,"first_name":"Brockie","last_name":"Tulleth","email":"btulleth9@flavors.me","gender":"Male","active":"false"},{"first_name":"Persona","age":33,"last_name":"Nueva","email":"email","gender":"Female","active":"true","id":11},{"first_name":"Test","age":80,"last_name":"asdasd","email":"asda","gender":"Female","active":"true","id":"12"}];
var lista:any;
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

function crearHeader(tabla:JQuery):JQuery
{
    let header:JQuery = $('<tr>');
    let theader:JQuery = $('<thead class="thead-dark" id="theader">');
    let atributos:string[] = [];
    for(let atributo in lista[0])
    {
        atributos.push(atributo);
        let th:JQuery = $('<th class="text-center" id="'+atributo+'">');
        th.append(atributo);
        header.append(th);
    }
    theader.append(header);
    tabla.append(theader);
    console.log(atributos);
    return crearBody(tabla,atributos);

}

function crearBody(tabla:JQuery,atributos:string[]):JQuery
{
    lista = obtenerPersonasFiltradas();
    let tbody:JQuery = $('<tbody id="bodyTabla">');
    for(let persona of lista)
    {
        if(persona.active == "false")
        {
            continue;
        }
        let tr:JQuery = $('<tr id="tableRow">');
        for(let atributo of atributos)
        {
            let td:JQuery = $('<td id="'+atributo+'">');
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
    let containerTabla:JQuery = $('<div class="table-responsive">');
    let tabla:JQuery = $('<table class="table table-bordered" id="tablaLista">');
    tabla = crearHeader(tabla);
    tabla.appendTo(containerTabla);
    $('.container-fluid').append(containerTabla);
}

function crearFormulario(this:HTMLElement)
{
    if($('.frmAlta').length>0)
    {
        return false;
    }
    let formulario:JQuery = $('<form class="frmAlta align-self-center">');
    let atributos:string[] = getAttribs();
    atributos.forEach((atributo:string)=>
    {
        if(atributo == "active"||atributo=="gender")
        {
            return;
        }
        let formGroupRow:JQuery = $('<div class="form-group row align-items-center">');
        let col:JQuery = $('<div class="col-sm-12">');
        let label:JQuery = $('<label id="'+atributo+'Label" for="'+atributo+'Input">');
        let input:JQuery= $('<input type="text" class="form-control" id="'+atributo+'Input" required="required">');
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

function agregarBotonEnviar(caller:HTMLElement)
{
    if(caller.id == 'btnAlta')
    {
        var col = $('<div class="col-sm-6">');
        var Enviar = $('<button type="button" class="btn btn-success form-control">Enviar</button>');
        Enviar.click(altaPersona);
        Enviar.appendTo(col);
        col.appendTo('#botones');
    }
}

function agregarBotonesRow(caller:HTMLElement)
{
    if(caller.id == 'tableRow')
    {
        let botones:string[] = ["Eliminar","Modificar"];
        for(let boton of botones)
        {
            let col:JQuery = $('<div class="col-sm-4" >');
            let button:JQuery = $('<button type="button" class="btn btn-primary form-control" id="'+boton+'Btn">'+boton+'</button>');
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

function agregarBotonCancelar(caller:HTMLElement)
{
    let largo:number = 6;
    if(caller.id == 'tableRow')
    {
        largo = 4;
    }
    let col:JQuery = $('<div class="col-sm-'+largo+'">');
    let Cancelar:JQuery = $('<button type="button" class="btn btn-danger form-control">Cancelar</button>');
    Cancelar.click(cerrarForm);
    Cancelar.appendTo(col);
    col.appendTo('#botones');
}

function agregarRadioButtons(caller:HTMLElement)
{
    let row:JQuery = $('<div class="form-group">');
    let formGroup:JQuery = $('<div class="form-row align-items-center">');
    let labelValor:string[] = ["F","M"];
    let id:string[] = ["Female","Male"];
    for(let i:number = 0; i<labelValor.length;i++)
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

function cargarRadioButtons(caller:HTMLElement)
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
    let form:JQuery = $('<form class="align-self-center" id="frmSelect">');
    let titles:string[] = ["Filtrar por tipo","Promedio de edad","Persona mas vieja"];
    let id:string[]= ["typeFilter","ageAvg","masGrande"];
    let row:JQuery = $('<div class="form-group form-row">').css('background-color','rgb(67, 82, 221)');
    for(let i:number=0;i<titles.length;i++)
    {
        let col:JQuery = $('<div class="form-group col-sm-4">');
        if(titles[i]=="Filtrar por tipo")
        {
            let label:JQuery = $('<label class="form-label">');
            label.append(titles[i]);
            let input:JQuery = $('<select class="form-control" id="'+id[i]+'">');
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
            let label:JQuery = $('<label class="form-label">');
            label.append(titles[i]);
            let input:JQuery = $('<input type="text" class="form-control" id="'+id[i]+'" disabled="disabled">');
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
    let form:JQuery = $('#frmSelect');
    let row:JQuery = $('<div class="form-group form-row">').css('background-color','rgb(221, 67, 98)');
    let atributos:string[] = getAttribs();
    for(let atributo of atributos)
    {
        let formCheck:JQuery = $('<div class="form-check col-xl-1">');
        let label:JQuery = $('<label>');
        label.append(atributo);
        let check:JQuery = $('<input type="checkbox" class="form-control" id="'+atributo+'Check">');
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
    let atributos:string[] = getAttribs();
    for(let atributo of atributos)
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
function getAttribs():string[]
{
    let header:HTMLElement[] = $('#theader').children().children();
    var attribs = [];
    for(let th of header)
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

function validarCampos():number
{
    let atributos:string[] = getAttribs();
    for(let atributo of atributos)
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
    let personas:object[] = JSON.parse(localStorage.getItem('personas'));
    return personas.map((persona:any)=>
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
    let personas:object[] = JSON.parse(localStorage.getItem('personas'));
    let listadoFiltrado = personas.filter((persona:any)=>
    {
        return (persona.active=="true");
    });
    if($('#typeFilter').val()=="Male")
    {
        listadoFiltrado = listadoFiltrado.filter((persona:any)=>
        {
            return (persona.gender=="Male");
        });
    }
    else if($('#typeFilter').val()=="Female")
    {
        listadoFiltrado = listadoFiltrado.filter((persona:any)=>
        {
            return (persona.gender=="Female");
        });
    }
    return listadoFiltrado;
}
//---------------------------------------------------------------------------------------------------------------------

//ABM Local Storage----------------------------------------------------------------------------------------------------
function altaPersona():null|number
{
    if(validarCampos()!=0)
    {
        alert("Es necesario ingresar todos los campos antes de continuar.");
        return -1;
    }
    let persona:any = {};
    let atributos:string[] = getAttribs();
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

function guardarPersona(persona:object)
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

function eliminarPersona(id:any)
{
    let personas:object[] = JSON.parse(localStorage.getItem('personas'));
    personas.forEach((persona:any)=>
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
    let personas:any[] = JSON.parse(localStorage.getItem('personas'));
    let atributos:string[] = getAttribs();
    for(let persona of personas)
    {
        if(persona.id == $('#idInput').val())
        {
            for(let atributo of atributos)
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
    localStorage.removeItem('personas');
    localStorage.setItem('personas',JSON.stringify(personas));
    removerObjetos();
    updatePage();
}
//-----------------------------------------------------------------------------------------------------------


//Map/Reduce/Filter-----------------------------------------------------------------------------------------
function calcularPromedioEdad()
{
    let contador:number = 0;
    let listadoFiltrado:object[] = obtenerPersonasFiltradas();
    let promedio:number = listadoFiltrado.map((persona:any)=>
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
    let listadoFiltrado:object[] = obtenerPersonasFiltradas();
    let personaMasVieja:any = listadoFiltrado.reduce((maximo:any,actual:any)=>
    {
        if(parseInt(actual.age) > parseInt(maximo.age))
        {
            maximo = actual;
        }
        return maximo;
    });
    let oldest:object[] = [personaMasVieja];
    personaMasVieja = oldest.map((persona:any)=>
    {
        return persona.first_name;
    });
    $('#masGrande').val(personaMasVieja);
}
//-------------------------------------------------------------------------------------------------------------