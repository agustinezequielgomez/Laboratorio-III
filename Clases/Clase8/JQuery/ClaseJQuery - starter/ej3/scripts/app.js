$(document).ready(function()
{
    $('#btnCambiar').click(function()
    {
        $('#a1').html($('#txtNombre').val());
    });

    $('#btnCambiar').dblclick(function()
    {
        $('h1').html($('#txtNombre').val());
    });

    $('#btnCambiar').mouseout(function()
    {
        $('#textos').css('margin-left','100px');
    });

    $('.claseP').click(function()
    {
        $(this).append("<p>Hola</p>");
    })

    $('#btnCambiar').click(function()
    {
        $('#a2').attr("href","http://www.clarin.com");
    });

    $('#txtNombre').click(function()
    {
        $('#p1').remove();
    })
})