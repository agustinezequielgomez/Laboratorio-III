//Agregar el codigo necesario para cargar un array de objetos en una tabla html(se prohibe usar innerHTML)
//Agregar evento a todos los TD. conseguir los TD con una funcion recursiva que reciba como parametros, el body del HTML, y
//la funcion que asigna el manejador(la tabla ya debera ser parte del DOM).
//Agregar algun estilo por codigo JS
//Agregar algun estilo por hoja de estilo CSS

//Agregar el codigo necesario para realizar un ABM de personas(usando AJAX)
/*
traer:
HTTP:GET
URL:http://localhost:3000/traer
PARAMS: collection=personas
RTA: ARRAY DE PERSONAS

agregar:
HTTP:POST
URL:http://localhost:3000/agregar
PARAMS: {collection: 'personas',objeto:<persona>}
REQUEST HEADER: xhr.setRequestHeader('Content-Type', 'application/json');
RTA:{message: "Alta exitosa"}

modificar:
HTTP:POST
URL:http://localhost:3000/modificar
PARAMS: {collection: 'personas',objeto:<persona>}
REQUEST HEADER: xhr.setRequestHeader('Content-Type', 'application/json');
RTA:"Modificacion exitosa"

eliminar:
HTTP:POST
URL:http://localhost:3000/eliminar
PARAMS: {'collection':'personas','id' : <id>}
REQUEST HEADER: xhr.setRequestHeader('Content-Type', 'application/json');
RTA:{"message":"Baja exitosa"}

*/

//NOTA: EL REQUEST HEADER SE AGREGA UNA VEZ ABIERTA LA CONEXION

var personas;

window.addEventListener('load',function()
{
    traerPersona();
    document.getElementById('btnAgregar').addEventListener('click',armarForm);
});

function armarTabla()
{
    var tabla = document.createElement('table');
    tabla.setAttribute('id','tableData');
    var header = document.createElement('tr');
    header.setAttribute('id','header');
    for(atributos in personas[0])
    {
        var th = document.createElement('th');
        th.appendChild(document.createTextNode(atributos));
        header.appendChild(th);
    }
    tabla.appendChild(header);

    for(persona of personas)
    {
        var row = document.createElement('tr');
        row.addEventListener('click',armarForm);
        row.setAttribute('class','tableRow');
        for(datos in persona)
        {
            var data = document.createElement('td');
            data.appendChild(document.createTextNode(persona[datos]));
            row.appendChild(data);
        }
        tabla.appendChild(row);
    }
    document.body.insertBefore(tabla,document.getElementById('btnAgregar'));
}

function agregar()
{
    var inputs = document.getElementsByClassName('inputs');
    console.log(inputs);
    var persona = new Persona(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value,inputs[4].value);
    agregarPersona(persona);
}

function eliminar()
{
    var inputs = document.getElementsByClassName('inputs');
    if(confirm("¿Seguro que desea eliminar a? " + inputs[2].value+", "+inputs[1].value)==true)
    {
        eliminarPersona(inputs[0].value);
    }
}

function modificarIndex()
{
    var inputs = document.getElementsByClassName('inputs');
    var persona = new Persona(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value,inputs[4].value);
    modificarPersona(persona);
}

function armarForm()
{
    var body = document.getElementsByTagName('body');
    for(hijos of body[0].children)
    {
        if(hijos.nodeName == 'FORM')
        {
            return -1;
        }
    }
    var form = document.createElement('form');
    var header = document.getElementById('header');
    var inputs = [];
    for(var i = 0; i<header.childElementCount; i++)
    {
        var label = document.createElement('label');
        label.textContent = (header.children[i].innerText+": ");
        label.setAttribute('class','labels');
        form.appendChild(label);
        inputs.push(document.createElement('input'));
        inputs[i].setAttribute('class','inputs');
        form.appendChild(inputs[i]);
        form.appendChild(document.createElement('br'));
        if(header.children[i].innerText == 'id' || header.children[i].innerText == 'active')
        {
            inputs[i].setAttribute('disabled','true');
        }
        
    }

    if(this.className == 'tableRow')
    {
        for(var i = 0; i < inputs.length; i++)
        {
            inputs[i].value = this.childNodes[i].innerText;
        }
        var modificar = document.createElement('button');
        modificar.setAttribute('id','btnModificar');
        modificar.setAttribute('type','button');
        modificar.append('Modificar');
        modificar.addEventListener('click',modificarIndex);
        form.appendChild(modificar);
        var borrar = document.createElement('button');
        borrar.append('Borrar');
        borrar.setAttribute('id','btnBorrar');
        borrar.setAttribute('type','button');
        borrar.addEventListener('click',eliminar);
        form.appendChild(borrar);
    }
    else if(this.id == 'btnAgregar')
    {
        var enviar = document.createElement('button');
        enviar.append("Enviar");
        enviar.setAttribute('type','button');
        enviar.addEventListener('click',agregar);
        form.appendChild(enviar);
    }
    document.body.appendChild(form);
}

function Persona(id, nombre, apellido, email, genero)
{
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.genero = genero;
    this.active = "true";
}