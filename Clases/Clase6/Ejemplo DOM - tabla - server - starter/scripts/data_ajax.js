//Enviar peticion GET a http://localhost:3000/traer
//pasar parametro "collection"  con valor "personas"  
//La respuesta sera un array con las personas

var xhr;

function traerPersonas() {
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = procesarPersonas;
    var cadena = "http://localhost:3000/traer?collection=personas";
    xhr.open('GET', cadena, true);
    xhr.send();
}

function traer() {
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = procesarPersonas;
    var cadena = "http://localhost:3000/traerpersona?collection=personas&indice=20";
    xhr.open('GET', cadena, true);
    xhr.send();
}

function enviar() {
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = enviarPersonas;
    var cadena = "http://localhost:3000/enviar";
    var body = { "collection": "personas", ReArmarTabla() };
    xhr.open('POST', cadena, true);
    xhr.send(JSON.stringify(body));
}

function enviarPersonas() {
    var spinner = document.getElementById('spinner')
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            arrayPersonas = JSON.parse(xhr.responseText);
            construirTabla(arrayPersonas);
            spinner.style.display = "none";
        } else {
            alert("Error: " + xhr.status + " - " + xhr.statusText);
            console.log(xhr.responseText);
        }
    } else {
        spinner.style.display = "block";
    }
}

function procesarPersonas() {
    var spinner = document.getElementById('spinner')
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            arrayPersonas = JSON.parse(xhr.responseText);
            construirTabla(arrayPersonas);
            spinner.style.display = "none";
        } else {
            alert("Error: " + xhr.status + " - " + xhr.statusText);
            console.log(xhr.responseText);
        }
    } else {
        spinner.style.display = "block";
    }
}