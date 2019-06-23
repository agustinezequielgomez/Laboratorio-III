function traerManejador()
{
  if(xhr.readyState == 4)
  {
    if(xhr.status == 200)
    {
      document.getElementById('spinner').style.display = 'none';
      var aux = JSON.parse(xhr.responseText);
      lista = aux["data"];
      actualizarTabla(lista);
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

function postManejador()
{
    if(xhr.readyState == 4)
    {
      if(xhr.status == 200)
      {
        document.getElementById('spinner').style.display = 'none';
        traerPersonas();
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