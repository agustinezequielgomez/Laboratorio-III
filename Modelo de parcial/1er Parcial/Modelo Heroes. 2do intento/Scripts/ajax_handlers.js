function traerManejador()
{
    if(xhr.readyState == 4)
    {
        if(xhr.status == 200)
        {
            document.getElementById('spinner').style.display = 'none';
            var aux = JSON.parse(xhr.responseText);
            heroes = aux["data"];
            armarTabla(heroes);
        }
        else
        {
            alert("Error: " + xhr.status + " - " + xhr.statusText);
        }
    }
    else
    {
        document.getElementById('spinner').style.display = 'block';
    }
}

function enviarManejador()
{
    if(xhr.readyState == 4)
    {
        if(xhr.status == 200)
        {
            document.getElementById('spinner').style.display = 'none';
            xhr.responseText = 'Alta exitosa';
            document.body.removeChild(document.getElementById('tablaHeroes'));
            traerAjax();
        }
        else
        {
            alert("Error: " + xhr.status + " - " + xhr.statusText);
        }
    }
    else
    {
        document.getElementById('spinner').style.display = 'block';
    }
}

function modificarManejador()
{
    if(xhr.readyState == 4)
    {
        if(xhr.status == 200)
        {
            document.getElementById('spinner').style.display = 'none';
            xhr.responseText = 'Modificacion exitosa';
            document.body.removeChild(document.getElementById('tablaHeroes'));
            traerAjax();
        }
        else
        {
            alert("Error: " + xhr.status +" - " +xhr.statusText);
        }
    }
    else
    {
        document.getElementById('spinner').style.display= 'block';
    }
}

function borrarManejador()
{
    if(xhr.readyState == 4)
    {
        if(xhr.status == 200)
        {
            document.getElementById('spinner').style.display = 'none';
            xhr.responseText = 'Eliminacion exitosa';
            document.body.removeChild(document.getElementById('tablaHeroes'));
            traerAjax();
        }
        else
        {
            alert("Error: " + xhr.status +" - " +xhr.statusText);
        }
    }
    else
    {
        document.getElementById('spinner').style.display= 'block';
    }
}