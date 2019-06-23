var xhr;

function traerHeroe()
{
    xhr = new XMLHttpRequest();
    var cadena = "http://localhost:3000/traer?collection=heroes";
    xhr.onreadystatechange = traerManejador;
    xhr.open('GET',cadena,true);
    xhr.send();
}

function agregarHeroe(heroe)
{
    var body=
    {
        "collection":"heroes",
        "heroe":heroe
    }
    xhr = new XMLHttpRequest();
    var cadena = "http://localhost:3000/agregar";
    xhr.onreadystatechange = agregarManejador;
    xhr.open('POST',cadena,true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(body));
}

function eliminarHeroe(heroe)
{
    var body=
    {
        "collection":"heroes",
        "id":heroe.id
    }
    xhr = new XMLHttpRequest();
    var cadena = "http://localhost:3000/eliminar";
    xhr.onreadystatechange = eliminarManejador;
    xhr.open('POST',cadena,true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(body));
}

function modificar(heroe)
{
    var body=
    {
        "collection":"heroes",
        "heroe":heroe
    }
    xhr = new XMLHttpRequest();
    var cadena = "http://localhost:3000/modificar";
    xhr.onreadystatechange = modificarManejador;
    xhr.open('POST',cadena,true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(body));
}