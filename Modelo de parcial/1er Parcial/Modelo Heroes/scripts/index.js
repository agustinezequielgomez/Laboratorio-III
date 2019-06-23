var heroes;

window.addEventListener('load',function()
{
    traerHeroe();
    var div = document.createElement('header');
    var img = document.createElement('img');
    img.setAttribute('id','banner');
    img.src = 'img/58d1efa31392a.jpg'; 
    var logo = document.createElement('img');
    logo.setAttribute('id','logo');
    logo.src = 'img/71653_Center for Superheroes logo-03-trimmed.png';
    div.appendChild(img);
    div.appendChild(logo);
    document.body.appendChild(div);
});

function armarTabla(heroes)
{
    console.log(heroes);
    var tabla = document.createElement('table');
    tabla.setAttribute('id','tableHeroes');
    var header= document.createElement('tr');
    header.setAttribute('id','tableHeader');
    for(atributos in heroes[0])
    {
        if(atributos == 'active'|| atributos == 'created_dttm')
        {
            continue;
        }
        var th = document.createElement('th');
        th.append(atributos);
        header.appendChild(th);
    }
    tabla.appendChild(header);

    for(heroe of heroes)
    {
        var fila = document.createElement('tr');
        fila.addEventListener('click',crearFormulario);
        fila.setAttribute('class','tableRow');
        for(atributo in heroe)
        {
            if(atributo == 'active'|| atributo == 'created_dttm')
            {
                continue;
            }
            var td = document.createElement('td');
            td.append(heroe[atributo]);
            fila.appendChild(td);
        }
        tabla.appendChild(fila);
    }
    var boton = document.createElement('button');
    boton.setAttribute('id','botonAgregar');
    boton.setAttribute('type','button');
    boton.innerText = 'Agregar';
    boton.addEventListener('click',crearFormulario);
    document.body.appendChild(tabla);
    document.body.appendChild(boton);
}

function crearFormulario()
{
    for(hijos of document.body.childNodes)
    {
        if(hijos.tagName == "FORM")
        {
            return -1;
        }
    }
    var header = document.getElementById('tableHeader');
    var form = document.createElement('form');
    var tabla = document.createElement('table');
    tabla.setAttribute('id','accionTabla');
    var i = 0;
    for(atributos of header.children)
    {
        var tr = document.createElement('tr');
        var label = document.createElement('label');
        label.setAttribute('class','labels');
        label.innerText = atributos.innerText+": ";
        var td = document.createElement('td');
        td.appendChild(label);
        tr.appendChild(td);
        var td = document.createElement('td');
        var input = document.createElement('input');
        input.setAttribute('class','inputs');
        if(atributos.innerText == 'id')
        {
            input.setAttribute('disabled','true');
        }
        td.appendChild(input);
        tr.appendChild(td);
        tabla.appendChild(tr);
        if(this.className == 'tableRow')
        {
            input.value = this.childNodes[i].innerText;               
            i++;
        }
    }

    if(this.className == 'tableRow')
    {
        var modificar = document.createElement('button');
        modificar.innerText='Modificar';
        modificar.setAttribute('type','button');
        modificar.addEventListener('click',modificarHeroe);
        var borrar = document.createElement('button');
        borrar.innerText='Borrar';
        borrar.setAttribute('type','button');
        borrar.addEventListener('click',borrarHeroe);
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.appendChild(modificar);
        tr.appendChild(td);
        td.appendChild(borrar);
        tr.appendChild(td);
        tabla.appendChild(tr);
    }

    if(this.id == 'botonAgregar')
    {
        var enviar = document.createElement('button');
        enviar.innerText='Enviar';
        enviar.setAttribute('type','button');
        enviar.addEventListener('click',enviarHeroe);
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.appendChild(enviar);
        tr.appendChild(td);
        tabla.appendChild(tr);
    }
    var cancelar = document.createElement('button');
    cancelar.setAttribute('type','button');
    cancelar.innerText = 'Cancelar';
    cancelar.setAttribute('id','btnCancelar');
    cancelar.addEventListener('click',function()
    {
        var form = document.getElementsByTagName('form');
        document.body.removeChild(form[0]);
    });
    td.appendChild(cancelar);
    tr.appendChild(td);
    tabla.appendChild(tr);
    form.appendChild(tabla);
    document.body.appendChild(form);
}

function enviarHeroe()
{
    var inputs = document.getElementsByClassName('inputs');
    var heroe = new Heroe(getLastId(),inputs[1].value,inputs[2].value,inputs[3].value,inputs[4].value,inputs[5].value);
    agregarHeroe(heroe);
    var form = document.getElementsByTagName('form');
    document.body.removeChild(form[0]);
}

function modificarHeroe()
{
    var inputs = document.getElementsByClassName('inputs');
    var heroe = new Heroe(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value,inputs[4].value,inputs[5].value);
    modificar(heroe);
    var form = document.getElementsByTagName('form');
    document.body.removeChild(form[0]);
}

function borrarHeroe()
{
    var inputs = document.getElementsByClassName('inputs');
    var heroe = new Heroe(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value,inputs[4].value,inputs[5].value);
    if((confirm("¿Seguro que desea chasquear a " +heroe.alias+"?"))==true)
    {
        eliminarHeroe(heroe);
    }
    var form = document.getElementsByTagName('form');
    document.body.removeChild(form[0]);
}

function Heroe(id, nombre, apellido, alias, edad, lado)
{
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.alias = alias;
    this.edad = edad;
    this.lado = lado;
    this.active = "true";
}

function getLastId()
{
    var lenght = heroes.length;
    return heroes[lenght-1].id+1;
}