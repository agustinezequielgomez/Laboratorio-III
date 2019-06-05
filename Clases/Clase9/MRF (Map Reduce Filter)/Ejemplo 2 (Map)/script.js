//Parsea la informacion para obtener unos elementos en especifico
/*var nombres = empleados.map(function(empleado)
{
    return empleado.nombre;
});

console.log(nombres);
*/
function cargarSelect()
{
    var select = document.getElementsByTagName('select')[0];
    if(select.hasChildNodes())
    {
        select.removeChild();
    }
    var nombres = empleados.map(function(empleado)
    {
        return empleado.nombre;
    });

    nombres.forEach(function(nombre)
    {
        var opcion = document.createElement('option');
        opcion.textContent = nombre;
        select.appendChild(opcion);
    });
}

//Traigo solos los datos que quiero del array de datos (Proyeccion)
var x = empleados.map(function(e)
{
    return {"id":e.id,"email":e.email};
});

console.log(x);