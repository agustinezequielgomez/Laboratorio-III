$(document).ready(function()
{
    $(this).click(function()
    {
        $('#btnSaludar').show();
    });
    
    var parrafo = $('#p1');
    parrafo.click(function()
    {
        alert("Hola");
    });

    $('.claseP').click(function()
    {
        $(this).css('color','red');
    });

    $('#btnSaludar').click(function()
    {
        $(this).css('fontSize','10px');
    });
});
