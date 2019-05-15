var xhr

function traerPersona()
{
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = procesarPersona;
    var cadena = "http://localhost:3000/traer?collection=personas";
    xhr.open('GET',cadena,true);
    xhr.send();
}

function agregarPersona(persona)
{
    var body =
    {
        "collection":"personas",
        "objeto":persona
    }
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = enviarPersona;
    var cadena = "http://localhost:3000/agregar";
    xhr.open('POST',cadena,true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(body));
}

function eliminarPersona(id)
{
    var body =
    {
        "collection":"personas",
        "id":id
    }
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = eliminarPersona;
    var cadena = "http://localhost:3000/eliminar";
    xhr.open('POST',cadena,true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(body));
}
