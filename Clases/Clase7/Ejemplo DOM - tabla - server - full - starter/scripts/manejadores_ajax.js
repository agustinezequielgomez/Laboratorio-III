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

function eliminarPersona(id)
{

}