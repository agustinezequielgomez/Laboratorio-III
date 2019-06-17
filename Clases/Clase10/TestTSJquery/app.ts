function onlyUnique(value:any, index:any, self:any) { 
    return self.indexOf(value) === index;
}

$(document).ready(()=>
{
    InicializarControles();
});

function InicializarControles():void
{
    ($('<div class="container">')).appendTo('body');
    ($('<form id="form">')).appendTo('.container');
    let labels:string[] = ["Pais","Ciudad"];
    labels.forEach(etiqueta => {
        let row = ($('<div class="form-group">')).appendTo('.container');
        let col = ($('<div class="col-sm-1">')).appendTo(row);
        let label = $('<label>');
        label.attr({id:`${etiqueta}Label`});
        label.attr('for',`${etiqueta}Label`);
        label.text(`${etiqueta}: `);
        label.appendTo(col);
        col = ($('<div class="col-sm-auto">')).appendTo(row);
        let select = $('<select>');
        select.attr({id:`${etiqueta}Select`,class:'form-control'});
        select.appendTo(col);
    });
    $('#PaisSelect').change(cargarCiudades);
    cargarControles();
}

function cargarControles():void
{
    let datos = data;
    let paises = datos.map((pais:any)=>
    {
        return pais.pais;
    });
    paises = paises.filter(onlyUnique);
    paises.forEach((pais:any) => {
        let option = $('<option id="OptionPais">');
        option.text(pais);
        option.appendTo('#PaisSelect');
    });
    cargarCiudades();
}

function cargarCiudades():void
{
    $('#CiudadSelect').empty();
    let datos = data;
    let ciudades = datos
    .filter((ciudad:any)=>
    {
        return (ciudad.pais ==$('#PaisSelect').val()); 
    })
    .map((ciudades:any)=>
    {
        return ciudades.ciudad;
    });
    console.log(ciudades);
    ciudades.forEach((ciudad:any) => {
        let option = $('<option id="OptionCiudad">');
        option.text(ciudad);
        option.appendTo('#CiudadSelect');
    });
}