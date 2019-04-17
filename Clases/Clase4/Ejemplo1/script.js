function Saludar()
{
    //document.write("Hola mundo"); //Escribo en el doc, en la pagina. Borra el contenido y escribe
    console.log("Escribo en la consola"); //Escribo en la consola del dev. Usado para debug
    window.alert("HHHHHHHHH"); //Alert partenece a la clase window pero se omite al escribir cualquier metodo de esa clase
    //alert("Hola mundo"); Es un elemento bloqueante (sincronico)
}
document.getElementById("p1").innerHTML= "Esto es un parrafo"; //Hace referencia a la pagina HTML que lo referencio y triggereo (Se sabe a traves del script include). Devuelve una referencia al doc que tiene el elemento con p1 como id. El innerHTML va a escribir lo que le paso en el lugar que tiene el id p1

document.getElementById("miDiv").innerHTML= "<h2>Esto es un titulo h2</h2>"; //Va a pegar esto sobre el div, y ocmo es html va a crearse el h2