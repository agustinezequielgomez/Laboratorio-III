function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

$(function()
{
    inicializarEventos();
});

function inicializarEventos()
{
    cargarSelect();
    cargarCiudades();
}

function cargarSelect()
{
    var paises = data
    .map((datos)=>
    {
        return datos.pais;
    })
    .filter(onlyUnique);
    paises.forEach(pais => {
        var $opcion = $('<option>');
        $opcion.append(pais);
        $('#paises').append($opcion);
        //Tambien posible como: 
        //$('#paises').append("<option>"+pais+"<option>");
    });
    $('#paises').change(cargarCiudades); //Change: evento que se dispara al seleccionar otro registro
}

function cargarCiudades()
{
    $('#ciudades').empty();
    var paisSeleccionado = $('#paises').val();
    var ciudades = data
    .filter(function(dato)
    {
        return (dato.pais == paisSeleccionado);
    })
    .map(function(dato)
    {
        return dato.ciudad;
    });
    ciudades.forEach(ciudad=>
        {
            $('#ciudades').append('<option>'+ciudad+'</option>');
        });
}