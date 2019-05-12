//Enviar peticion GET a http://localhost:3000/traer
//pasar parametro "collection"  con valor "personas"  
//La respuesta sera un array con las personas
var xhr;
function traerPersonas() 
{
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = procesarPersonas;
    var cadena = "http://localhost:3000/traer?collection=personas";
    xhr.open('GET', cadena, true);
    xhr.send();
}

function traer()
{
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = procesarPersonas;
    var cadena = "http://localhost:3000/traerpersona?collection=personas&indice=20";
    xhr.open('GET', cadena, true);
    xhr.send();
}

function enviarPersonas()
{
    
}

function procesarPersonas() 
{
    var josele = document.getElementById('spinner')
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            arrayPersonas = JSON.parse(xhr.responseText);
            construirTabla(arrayPersonas);
            josele.style.display = "none";
        }
        else {
            alert("Error: " + xhr.status + " - " + xhr.statusText);
            console.log(xhr.responseText);
        }
    }
    else {
        josele.style.display= "block";
    }
}