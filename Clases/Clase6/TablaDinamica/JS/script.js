window.addEventListener('load',inicializarEventos);

function inicializarEventos()
{
    document.getElementById("btnTabla").addEventListener('click',cargarTabla);
}

function cargarTabla()
{
    //console.log(personas);
    var tabla = document.createElement('table');
    var cabecera = document.createElement('tr');
    tabla.setAttribute('border','1px solid black');
    //tabla.setAttribute('class','tabla');
    //tabla.className = "tabla";
    tabla.setAttribute('style','border-collapse:collapse');
    for(var atributo in personas[0]) //Recorro los atributos de la primer persona con for in
    {
        var th = document.createElement('th');
        cabecera.setAttribute('id','cabecera');
        var texto = document.createTextNode(atributo);
        th.appendChild(texto);
        //th.textContent = atributo;
        cabecera.appendChild(th);
    }
    tabla.appendChild(cabecera);
    
    
    for(var persona of personas) //Obtengo las personas como objeto individual desde el array con for of
    {
        var atributosExtra = DetectarAtributos(persona,cabecera.childNodes);
        if(atributosExtra!=[])
        {
            for(atributoAgregar of atributosExtra)
            {
                th = document.createElement('th');
                th.appendChild(document.createTextNode(atributoAgregar));
                cabecera.appendChild(th);
            }
        }
        /*
        if(Object.keys(persona).length > cabecera.childElementCount)
        {
            var diferencia = Object.keys(persona).length - cabecera.childElementCount;
            th = document.createElement('th');
            th.appendChild(document.createTextNode(((Object.keys(persona))[Object.keys(persona).length-diferencia])));
            cabecera.appendChild(th);
        }*/
        var fila = document.createElement('tr');
        for(var j in persona) //Recorro c/atributo de la persona seleccionada
        {
            var celda = document.createElement('td');
            var dato = document.createTextNode(persona[j]); //uso el atributo como indice para acceder a su valor
            celda.appendChild(dato);
            celda.setAttribute('style','text-align:center');
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    document.getElementById('info').appendChild(tabla);
}

function DetectarAtributos(objeto,atributos)
{
    var keys = Object.keys(objeto);
    var retorno = [];
    var flag;
    for(valor of keys)
    {
        flag = false;
        for(val of atributos)
        {
            if(val.innerText == valor)
            {
                flag = true;
                break;
            }
        }
        if(flag == false)
        {
            retorno.push(valor);
        }
    }
    return retorno;
}