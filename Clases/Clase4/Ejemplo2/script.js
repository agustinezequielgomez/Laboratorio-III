/*document.getElementById('p1').onclick =function(){
    this.innerHTML = "asdasdasd";
}; //Esto tampoco se recomienda*/


//////////////////FORMA CORRECTA
var miParrafo;

window.addEventListener('load', inicializarEventos); //Cuando se carga la pag se agregan todos los eventos

function inicializarEventos()
{
    miParrafo = document.getElementById('p1'); //Agarro la referencia al parrafo al que le voy a agregar el evento
    miParrafo.addEventListener('click', function(){
        this.innerHTML = "Hola";//Agrego la referencia al evento
    });
}
//////////////////MANERA DEFINITIVA
window.addEventListener('load', ()=>{
    document.getElementById('p1').addEventListener('click', (e)=>{
        e.target.innerHTML = "Hola";
    });
});
////////////////////////////////////////////////////

/*
document.getElementById('p1').addEventListener('click', function () {
    this.innerHTML = "asdasdasd";
}); //Agrego manejador de evento

document.getElementById('p1').addEventListener('click', function () {
    this.style.color = "blue";
}); //Lista de ejecuccion. Con un solo click cambio texto y color. Voy agregando manejadores que hacen distintas cosas y al hacer click se triggerean todas de una
*/