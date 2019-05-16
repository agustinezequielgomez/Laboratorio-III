function procesarPersona()
{
    if(xhr.readyState == 4)
    {
        if(xhr.status == 200)
        {
            personas = JSON.parse(xhr.responseText);
            document.getElementById('spinner').style.display='none';
            armarTabla();
        }
        else
        {
            alert("Error: " + xhr.status + " - " + xhr.statusText);
        }
    }
    else
    {
        document.getElementById('spinner').style.display='block';
    }
}

function enviarPersona()
{
    if(xhr.readyState == 4)
    {
        if(xhr.status == 200)
        {
            xhr.responseText = "Alta exitosa";
            document.getElementById('spinner').style.display = "none";
        }
        else
        {
            alert("Error: " + xhr.status + " - " + xhr.statusText);
        }
    }
    else
    {
        document.getElementById('spinner').style.display = "block";
    }
}

function eliminarManejador()
{
    if(xhr.readyState == 4)
    {
        if(xhr.status == 200)
        {
            xhr.responseText="Baja Exitosa";
            document.getElementById('spinner').style.display = 'none';
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
            xhr.responseText = "Modificacion exitosa";
            document.getElementById('spinner').style.display = 'none';
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