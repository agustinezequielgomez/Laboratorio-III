//Funcion que se ejecuta despues de renderizar los objetos
$(function()
{
    inicializarEventos();
});

function inicializarEventos()
{
    $("#btnEnviarAjax").click(enviarAjax);
    $("#btnEnviarGet").click(enviarGet);
    $("#btnEnviarGetMensajes").click(enviarGetMensajes);
    $("#btnEnviarPost").click(enviarPost);
    /*$("#btnGetJSON").click(getJSON); */
    $("#btnLoad").click(usarLoad);
}

//IMORTANTE. AJAX funcion general, $.get o $.post son atajos especificos
function enviarAjax(e)
{
    e.preventDefault(); //Evita que se ejecute el comportamiento standard del control en el form

    var legajo = $("#txtLegajo").val();
    var nombre = $("#txtNombre").val();

    var parametros = {
        "legajo":legajo,
        "nombre":nombre
    };

    $.ajax({ //Metodo de JQuery que ejecuta una llamada de AJAX. Recibe la configuracion de la llamada (a modo de objeto para no tener que andar pasando muchos parametros a la funcion)
        url: "http://localhost:3000/concatenar",
        data: parametros,
        /*Otras propiedades que puede llevar la peticion AJAX (para POST)
          type:post,
          dataType: 'json'
          

          Manejadores de la request. Ver documentacion de JQuery para ver que reciben por parametro para su uso*/
          beforeSend: function() //Manejador de onreadystatechange != 4
          {
              $('#info').html('<img src="./images/spin.gif" alt ="preloader">');
          },
          success:function(respuesta) //Manejador de sucess (status 200), recibe la response del server
          {
              $("#info").html(respuesta);
          },
          error:function(xhr,status) //status dice solo "Error"
          {
              alert("Error " + xhr.status + " - " + xhr.statusText);
          },
          complete:function(xhr,status)
          {
              alert("Peticion terminada");
          }
    })
}

function enviarGet(e)
{
    e.preventDefault();

    var legajo = $("#txtLegajo").val();
    var nombre = $("#txtNombre").val();

    var parametros = {
        "legajo":legajo,
        "nombre":nombre
    };

    //URL, parametros que quiero que viajen, manejador de evento en caso de success. No hay manejador de error u otros manejadores
    $.get("http://localhost:3000/concatenar",parametros,function(respuesta)
    {
        $("#info").text(respuesta);
    });
}

function enviarGetMensajes(e)
{
    e.preventDefault();

    var legajo = $("#txtLegajo").val();
    var nombre = $("#txtNombre").val();

    var parametros = {
        "legajo":legajo,
        "nombre":nombre
    };

    //URL, parametros que quiero que viajen, manejador de evento en caso de success
    $.get("http://localhost:3000/concatenar",parametros,function(respuesta)
    {
        $("#info").text(respuesta);
    })
    //Chaining de manejadores
    .done(function() //Se ejecuta al terminar la peticion
    {
        alert("done");
    })
    .fail(function() //Se ejecuta en caso de error
    {
        alert("Fail");
    })
    .always(function() //Se ejecuta siempre (poner y sacar spinners)
    {
        alert("Always");
    });
}

function enviarPost(e)
{
    e.preventDefault();

    var legajo = $("#txtLegajo").val();
    var nombre = $("#txtNombre").val();
    var parametros = {
        "legajo":legajo,
        "nombre":nombre
    };

    $.post("http://localhost:3000/loadpost",function(respuesta)
    {
        console.log(respuesta);
    });

    $.post("http://localhost:3000/saludo",parametros,function(respuesta)
    {
        console.log(respuesta);
    })
}

function usarLoad(e)
{
    e.preventDefault();

    //Trae el HTML y lo printea en la pantalla.
    //http://localhost:3000/loadhtml p y http://localhost:3000/loadhtml div p tienen funciones distintas
    $("#info").load("http://localhost:3000/loadhtml");
}