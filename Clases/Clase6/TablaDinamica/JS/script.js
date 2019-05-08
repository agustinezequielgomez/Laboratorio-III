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
    for(var atributo in personas[0])
    {
        var th = document.createElement('th');
        cabecera.setAttribute('id','cabecera');
        var texto = document.createTextNode(atributo);
        th.appendChild(texto);
        //th.textContent = atributo;
        cabecera.appendChild(th);
    }
    tabla.appendChild(cabecera);
    
    
    for(var i in personas)
    {
        /*TERMINAR
        if(personas[i].lenght > cabecera.childElementCount)
        {
            th = document.createElement('th');
            th.appendChild((personas[i].lenght-cabecera.childElementCount)+personas[i].lenght)
            cabecera.appendChild(th);
        }*/
        var fila = document.createElement('tr');
        for(var j in personas[i])
        {
            var celda = document.createElement('td');
            var dato = document.createTextNode(personas[i][j]);
            celda.appendChild(dato);
            celda.setAttribute('style','text-align:center');
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    document.getElementById('info').appendChild(tabla);
}