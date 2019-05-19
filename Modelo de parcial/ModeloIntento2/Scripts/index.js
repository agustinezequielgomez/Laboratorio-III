var heroes;

window.addEventListener('load',function()
{
    traerAjax();
    document.getElementById('btnAgregar').addEventListener('click',crearForm);
});

function armarTabla(heroes)
{
    var tabla = document.createElement('table');
    tabla.id = 'tablaHeroes';
    var header = document.createElement('tr');
    header.id = 'headerTabla';
    for(atributos in heroes[0])
    {
        var th = document.createElement('th');
        th.append(atributos);
        header.appendChild(th);
    }
    tabla.appendChild(header);

    for(heroe of heroes)
    {
        var atributosNuevos = encontrarAtributosNuevos(heroe,header.children);
        if(atributosNuevos.length != 0)
        {
            for(atributos of atributosNuevos)
            {
                var th = document.createElement('th');
                th.appendChild(document.createTextNode(atributos));
                header.appendChild(th);
            }
        }
        var tr = document.createElement('tr');
        tr.className = 'tableRow';
        tr.addEventListener('click',crearForm);
        for(atributos in heroe)
        {
            var td = document.createElement('td');
            td.append(heroe[atributos]);
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }
    document.body.appendChild(tabla);
}

function crearForm()
{
    for(hijosBody of document.body.children)
    {
        if(hijosBody.nodeName  == 'FORM')
        {
            document.body.removeChild(hijosBody);
        }
    }
    var form = document.createElement('form');
    form.id = 'formHeroe';
    var tabla = document.createElement('table');
    tabla.id = 'tablaForm';
    var header = document.getElementById('headerTabla');
    var elementos = document.getElementsByClassName('tableRow');
    var i = 0;
    for(atributos of header.children)
    {
        var tr = document.createElement('tr');
        var label = document.createElement('label');
        label.className = 'labelsForm';
        label.innerText = atributos.innerText+": ";
        var td = document.createElement('td');
        td.appendChild(label);
        tr.appendChild(td);

        var input = document.createElement('input');
        input.className = 'inputForm';
        var td = document.createElement('td');
        td.appendChild(input);
        tr.appendChild(td);
        if(atributos.innerText == 'id' || atributos.innerText == 'active' || atributos.innerText == 'created_dttm')
        {
            input.disabled = true;
        }
        if(this.className == 'tableRow')
        {
            input.value = this.children[i].innerText;
            i++;
        }
        tabla.appendChild(tr);
    }

    if(this.className == 'tableRow')
    {
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        var modificar = document.createElement('button');
        modificar.id = 'btnModificar';
        modificar.className = 'btnForm';
        modificar.innerText = 'Modificar';
        modificar.type = 'button';
        modificar.addEventListener('click',modificarHeroe);
        td.appendChild(modificar);
        tr.appendChild(td);
        var td = document.createElement('td');
        var borrar = document.createElement('button');
        borrar.id = 'btnBorrar';
        borrar.className = 'btnForm';
        borrar.innerText = 'Borrar';
        borrar.type = 'button';
        borrar.addEventListener('click',borrarHeroe);
        td.appendChild(borrar);
        tr.appendChild(td);
    }

    if(this.id == 'btnAgregar')
    {
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        var enviar = document.createElement('button');
        enviar.id = 'btnEnviar';
        enviar.className = 'btnForm';
        enviar.innerText = 'Enviar';
        enviar.type = 'button';
        enviar.addEventListener('click',agregarHeroe);
        td.appendChild(enviar);
        tr.appendChild(td);
    }
    var cancelar = document.createElement('button');
    cancelar.className = 'btnForm';
    cancelar.id = 'btnCancelar';
    cancelar.innerText = 'Cancelar';
    cancelar.addEventListener('click',function()
    {
        document.body.removeChild(document.getElementById('formHeroe'));
    })
    var td = document.createElement('td');
    td.appendChild(cancelar);
    tr.appendChild(td);
    tabla.appendChild(tr);
    form.appendChild(tabla);
    document.body.appendChild(form);
}

function agregarHeroe()
{
    var inputs = document.getElementsByClassName('inputForm');
    var heroe = new Heroe(getNextID(),inputs[1].value,inputs[2].value,inputs[3].value,inputs[4].value,inputs[5].value);
    enviarAjax(heroe);
    document.body.removeChild(document.getElementById('formHeroe'));
}

function modificarHeroe()
{
    var inputs = document.getElementsByClassName('inputForm');
    var heroe = new Heroe(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value,inputs[4].value,inputs[5].value);
    modificarAjax(heroe);
    document.body.removeChild(document.getElementById('formHeroe'));
}

function borrarHeroe()
{
    var inputs = document.getElementsByClassName('inputForm');
    var heroe = new Heroe(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value,inputs[4].value,inputs[5].value);
    if(confirm("¿Seguro que desea eliminar a "+heroe.alias+"?"))
    {
        borrarAjax(heroe);
    }
    document.body.removeChild(document.getElementById('formHeroe'));
}

function Heroe(id,nombre,apellido,alias,edad,lado)
{
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.alias = alias;
    this.edad = edad;
    this.lado = lado;
    this.active = true;
}

function getNextID()
{
    var length = heroes.length;
    return heroes[length-1].id+1;
}

function encontrarAtributosNuevos(objectKeys, headerActual)
{
    var keys = Object.keys(objectKeys);
    var atributosNuevos = [];
    var flag;
    for(atributosObjeto of keys)
    {
        flag = false;
        for(atributosHeader of headerActual)
        {
            if((atributosObjeto).toLowerCase() == (atributosHeader.innerText).toLowerCase())
            {
                flag = true;
                break;
            }
        }
        if(flag == false)
        {
            atributosNuevos.push(atributosObjeto);
        }
    }
    return atributosNuevos;
}