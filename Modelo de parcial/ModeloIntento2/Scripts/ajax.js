var xhr;
function traerAjax()
{
    xhr = new XMLHttpRequest();
    var url = "http://localhost:3000/traer?collection=users";
    xhr.onreadystatechange = traerManejador;
    xhr.open('GET',url,'true');
    xhr.send();
}

function enviarAjax(heroe)
{
    var body=
    {
        "collection":"users",
        "heroe":heroe
    }
    xhr = new XMLHttpRequest();
    var url = "http://localhost:3000/agregar";
    xhr.onreadystatechange = enviarManejador;
    xhr.open('POST',url,true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(body));
}


function modificarAjax(heroe)
{
    var body=
    {
        "collection":"users",
        "heroe":heroe
    }
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = modificarManejador;
    var url = "http://localhost:3000/modificar";
    xhr.open('POST',url,true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(body));
}

function borrarAjax(heroe)
{
    var body=
    {
        "collection":"users",
        "id":heroe.id
    }
    xhr= new XMLHttpRequest();
    xhr.onreadystatechange = borrarManejador;
    var url = "http://localhost:3000/eliminar";
    xhr.open('POST',url,true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(body));
}