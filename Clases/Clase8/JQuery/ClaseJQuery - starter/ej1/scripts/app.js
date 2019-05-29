$(document).ready(function()
{
    alert("Hola mundo");
});

$(document).ready(inicializar);


function inicializar(e)
{
    alert("inicializar");
}

//Mejor manera
$(function()
{
    alert("Ready inicializado");
});