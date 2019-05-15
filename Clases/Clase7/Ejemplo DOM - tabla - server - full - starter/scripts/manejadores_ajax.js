function procesarPersona()
{
    if(xhr.readyState == 4)
    {
        if(xhr.status == 200)
        {
            personas = JSON.parse(xhr.responseText);
            armarTabla();
        }
        else
        {
            alert("Error: " + xhr.status + " - " + xhr.statusText);
        }
    }
}

function enviarPersona(persona)
{
    
}