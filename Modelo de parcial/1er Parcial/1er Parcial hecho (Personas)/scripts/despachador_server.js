var xhr;
function traerPersonas() 
{
  var url = "http://localhost:3000/traer?collection=personas"
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = traerManejador;
  xhr.open('GET',url,true);
  xhr.send();
}

function guardarPersona(persona) 
{
  var body=
  {
    'collection':'personas',
    'objeto':persona
  }
  var url = "http://localhost:3000/agregar";
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = postManejador;
  xhr.open('POST',url,true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(body));
}

function eliminarPersona(id) 
{
  var body=
  {
    'collection':'personas',
    'id':id
  }
  var url = "http://localhost:3000/eliminar";
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = postManejador;
  xhr.open('POST',url,true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(body));
}

function modificarPersona(persona) 
{
  var body=
  {
    'collection':'personas',
    'objeto':persona
  }
  var url = "http://localhost:3000/modificar";
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = postManejador;
  xhr.open('POST',url,true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(body));
}


