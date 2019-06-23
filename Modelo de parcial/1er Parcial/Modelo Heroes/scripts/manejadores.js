function traerManejador()
{
    if(xhr.readyState == 4)
    {
        if(xhr.status == 200)
        {
            document.getElementById('spinner').style.display='none';
            var aux = JSON.parse(xhr.responseText);
            console.log(aux);
            heroes = aux['data'];
            armarTabla(heroes);
        }
        else
        {
            alert("Error: " + xhr.status + " - " + xhr.statusText);
        }
    }
    else
    {
        document.getElementById('spinner').style.display='inline';
    }
}

function agregarManejador()
{
    if(xhr.readyState == 4)
    {
        if(xhr.status == 200)
        {
            document.getElementById('spinner').style.display='none';
            document.body.removeChild(document.getElementById('tableHeroes'));
            document.body.removeChild(document.getElementById('botonAgregar'));
            traerHeroe();
        }
        else
        {
            alert("Error: " + xhr.status + " - " + xhr.statusText);
        }
    }
    else
    {
        document.getElementById('spinner').style.display='inline';
    }
}

function eliminarManejador()
{
    if(xhr.readyState == 4)
    {
        if(xhr.status == 200)
        {
            document.getElementById('spinner').style.display='none';
            document.body.removeChild(document.getElementById('tableHeroes'));
            document.body.removeChild(document.getElementById('botonAgregar'));
            traerHeroe();
        }
        else
        {
            alert("Error: " + xhr.status + " - " + xhr.statusText);
        }
    }
    else
    {
        document.getElementById('spinner').style.display='inline';
    }
}

function modificarManejador()
{
    if(xhr.readyState == 4)
    {
        if(xhr.status == 200)
        {
            document.getElementById('spinner').style.display='none';
            document.body.removeChild(document.getElementById('tableHeroes'));
            document.body.removeChild(document.getElementById('botonAgregar'));
            traerHeroe();
        }
        else
        {
            alert("Error: " + xhr.status + " - " + xhr.statusText);
        }
    }
    else
    {
      document.getElementById('spinner').style.display='inline';
    }
}

