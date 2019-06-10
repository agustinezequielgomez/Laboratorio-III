Array.prototype.unique=function(a){
    return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
  });
$(function()
{
    inicializarEventos();
});

function inicializarEventos()
{
    cargarSelect();
}

function cargarSelect()
{
    var paises = data.map(function(dato)
    {
        return dato.pais;
    });
    var opcion = new Option;
    $('#paises').add(opcion);
}