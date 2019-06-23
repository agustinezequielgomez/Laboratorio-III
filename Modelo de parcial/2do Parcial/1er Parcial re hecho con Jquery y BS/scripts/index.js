var btnAlta;
var divFrm;
var frmAlta;
var divInfo;
var btnCancelar;
var data = [{"id":1,"first_name":"Walliw","last_name":"Spurden","email":"wspurden0@reverbnation.com","gender":"Female","active":"true"},{"id":2,"first_name":"Calley","last_name":"Albion","email":"calbion1@goodreads.com","gender":"Female","active":"false"},{"first_name":"Juan","last_name":"Shearsby","email":"jshearsby2@discovery.com","gender":"Female","active":"true","id":"3"},{"id":4,"first_name":"Carlyn","last_name":"Jarnell","email":"cjarnell3@dedecms.com","gender":"Female","active":"true"},{"id":5,"first_name":"Maegan","last_name":"Lowbridge","email":"mlowbridge4@drupal.org","gender":"Female","active":"false"},{"id":6,"first_name":"Ambur","last_name":"Aloway","email":"aaloway5@pinterest.com","gender":"Female","active":"true"},{"id":7,"first_name":"Merola","last_name":"Bartocci","email":"mbartocci6@mozilla.com","gender":"Female","active":"false"},{"id":8,"first_name":"Phelia","last_name":"Vaz","email":"pvaz7@linkedin.com","gender":"Female","active":"false"},{"first_name":"gggg","last_name":"Stibbs","email":"lstibbs8@reddit.com","gender":"Male","active":"true","id":"9"},{"id":10,"first_name":"Brockie","last_name":"Tulleth","email":"btulleth9@flavors.me","gender":"Male","active":"false"},{"first_name":"Persona","last_name":"Nueva","email":"email","gender":"Female","active":false,"id":11},{"first_name":"Test","last_name":"asdasd","email":"asda","gender":"Female","active":false,"id":"12"}];
var lista;

$(document).ready(()=>
{
    agregarContainer();
    sessionStorage.setItem('personas',JSON.stringify(data));
});

function agregarContainer()
{
    $('<div class="container">').prependTo('body');
}

function crearHeader(tabla)
{
    var header = document.createElement('tr');
    var theader = document.createElement('thead');
    theader.id = 'theader';
    var atributos = [];
    for(atributo in lista[0])
    {
        if(atributo == 'active')
        {
            continue;
        }
        atributos.push(atributo);
        var th = document.createElement('th');
        th.appendChild(document.createTextNode(atributo));
        header.appendChild(th);
    }
    theader.appendChild(header);
    tabla.appendChild(theader);
    console.log(atributos);
    return crearBody(tabla,atributos);

}

function crearBody(tabla,atributos)
{
    console.log(atributos);
    var tbody = document.createElement('tbody');
    tbody.id = 'bodyTabla';
    for(persona of lista)
    {
        var tr = document.createElement('tr');
        for(atributo of atributos)
        {
            if(atributo == 'active')
            {
                continue;
            }
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(persona[atributo]));
            tr.appendChild(td);
        }
        tr.id = 'tableRow';
        tr.addEventListener('click',crearFormulario);
        tbody.appendChild(tr);
    }
    tabla.appendChild(tbody);
    return tabla;
}

function actualizarTabla(lista) 
{
    var tabla = document.createElement('table');
    tabla.id = "tablaLista";
    tabla = crearHeader(tabla);
    document.body.appendChild(tabla);
}

function consultarFormExistente()
{
    for(hijos of document.body.children)
    {
        if(hijos.className == 'frmAlta')
        {
            return 0;
        }
    }
}

function crearFormulario()
{
    if(consultarFormExistente()==0)
    {
        return -1;
    }
    var formulario = document.createElement('form');
    formulario.className = 'frmAlta';
    var tabla = document.createElement('table');
    var header = document.getElementById('theader');
    var i = 0;
    for(i = 0; i< header.children[0].children.length; i++)
    {
        console.log(header.children[0].children[i].innerText);
        if(header.children[0].children[i].innerText == 'gender')
        {
            continue;
        }
        var tr = document.createElement('tr');
        var label = document.createElement('label');
        label.className = 'labelForm';
        label.innerText = header.children[0].children[i].innerText;
        var td = document.createElement('td');
        td.appendChild(label);
        tr.appendChild(td);
        var input = document.createElement('input');
        input.className = 'inputForm';
        if(this.id == 'tableRow')
        {
            input.value = this.children[i].innerText;
        }
        if(header.children[0].children[i].innerText == 'id')
        {
            input.disabled = true;
        }
        if(header.children[0].children[i].innerText == 'email')
        {
            input.type = 'email';
        }
        var td = document.createElement('td');
        td.appendChild(input);
        tr.appendChild(td);
        tabla.appendChild(tr);
    }
    agregarRadioButtons(tabla,this);
    agregarBotonesRow(tabla,this);
    agregarBotonEnviar(tabla,this);
    formulario.appendChild(tabla);
    document.body.appendChild(formulario);
}

function agregarBotonEnviar(tabla,caller)
{
    if(caller.id == 'btnAlta')
    {
        var tr = document.createElement('tr');
        var Enviar = document.createElement('button');
        Enviar.innerText = 'Dar de Alta';
        Enviar.type = 'button';
        Enviar.className = 'btnForm';
        Enviar.addEventListener('click',altaPersona);
        var td = document.createElement('td');
        td.appendChild(Enviar);
        tr.appendChild(td);
        agregarBotonCancelar(tabla,tr);
        tabla.appendChild(tr);
    }
}

function agregarBotonesRow(tabla, caller)
{
    if(caller.id == 'tableRow')
    {
        var botones = ["Eliminar","Modificar","Cancelar"];
        for(var i = 0 ; i<botones.length;i++)
        {
            var tr = document.createElement('tr');
            var boton = document.createElement('button');
            boton.innerText = botones[i];
            boton.type = 'button';
            boton.className = 'btnForm';
            if(i == 0)
            {
                boton.addEventListener('click',eliminacionPersona);
            }
            else if(i==1)
            {
                boton.addEventListener('click',modificacionPersona);
            }
            else
            {
                boton.addEventListener('click',cerrarForm);
            }
            var td = document.createElement('td');
            td.appendChild(boton);
            tr.appendChild(td);
            tabla.appendChild(tr);
        }
    }
}

function agregarBotonCancelar(tabla,tr)
{
    var Cancelar = document.createElement('button');
    Cancelar.innerText = 'Cancelar';
    Cancelar.type = 'button';
    Cancelar.className = 'btnForm';
    Cancelar.addEventListener('click',cerrarForm);
    var td = document.createElement('td');
    td.appendChild(Cancelar);
    tr.appendChild(td);
}

function agregarRadioButtons(table,caller)
{
    var labelValor = ["F","M"];
    var id = ["Female","Male"]; 
    var tr = document.createElement('tr');    
    for(var i = 0; i<labelValor.length;i++)
    {
        var label = document.createElement('label');
        label.className = 'labelForm';
        label.innerText = labelValor[i];
        tr.appendChild(label);
        var input = document.createElement('input');
        input.type = 'radio';
        input.id = id[i];
        input.name = 'genero';
        input.className = 'inputForm';
        cargarRadioButtons(caller,input);
        tr.appendChild(input);
    }
    table.appendChild(tr);
}

function cargarRadioButtons(caller,input)
{
    if(caller.id == 'tableRow')
    {
        console.log(input.id);
        console.log(caller.children[4].innerText);
        console.log(caller.children[4].innerText=='Female');
        var validacion = caller.children[4].innerText=='Female';        
        if(validacion == true && input.id == 'Female')
        {
            input.defaultChecked = true;            
        }
        else if(validacion == false && input.id == 'Male')
        {
            input.defaultChecked = true;            
        }
    }
}

function cerrarForm()
{
    document.body.removeChild(document.getElementsByClassName('frmAlta')[0]);
}

function removerObjetos()
{
    cerrarForm();
    document.body.removeChild(document.getElementById('tablaLista'));    
}

function validarCampos()
{
    var inputs = document.getElementsByClassName('inputForm');
    for(var i = 1; i<inputs.length;i++)
    {
        if(inputs[i].value == "" || inputs[i].value == " " || (inputs[4].checked == false && inputs[5].checked == false))
        {
            return -1;
        }
        
    }
    return 0;    
}

function altaPersona() 
{
    if(validarCampos()!=0)
    {
        alert("Es necesario ingresar todos los campos antes de continuar.");
        return -1;
    }
    var inputs = document.getElementsByClassName('inputForm');
    console.log(inputs);
    var genero;
    if(inputs[4].checked == true)
    {
        genero = "Female";
    }
    else
    {
        genero = "Male"
    }
    var nuevaPersona = new Persona(inputs[1].value, inputs[2].value, inputs[3].value, genero);
    guardarPersona(nuevaPersona);
    removerObjetos();
}

function eliminacionPersona() 
{
    var inputs = document.getElementsByClassName('inputForm');
    if(confirm("¿Desea eliminar a " + inputs[1].value +", " +inputs[2].value+"?"))
    {
        eliminarPersona(inputs[0].value);
        removerObjetos();        
    }
}

function modificacionPersona(persona) 
{
    if(validarCampos()!=0)
    {
        alert("Es necesario ingresar todos los campos antes de continuar.");
        return -1;
    }
    var gender;
    if (document.getElementById('Male').checked) {
        gender = "Male";
    }
    else {
        gender = "Female";
    }
    var inputs = document.getElementsByClassName('inputForm');
    var persona = new Persona(inputs[1].value,inputs[2].value,inputs[3].value,gender);
    persona.id = inputs[0].value;
    modificarPersona(persona);
    removerObjetos();
}

function Persona(nombre,apellido,email,sexo){
    this.first_name = nombre;
    this.last_name = apellido;
    this.email = email;
    this.gender = sexo;
    this.active = "true";
}