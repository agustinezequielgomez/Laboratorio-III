$(document).ready(()=>
{
    InicializarPagina();
});

function InicializarPagina()
{
    $('body').css("background-color","rgb(96, 160, 245)");
    let container = $('<div class="container">').appendTo('body');
    let row = $('<div class="row">');
    let header = $('<header>');
    let img = $('<img src="./images/free-people-icon-vector.jpg" class="img-fluid">');
    header.append(img);
    let botonAgregar = $('<button class="btn btn-primary">Agregar</button>');
    botonAgregar.click(agregarPersona);
    row.append(header);
    container.append(row);
    row = $('<div class="row">');
    row.append(botonAgregar);
    container.append(row);
    crearForm();
}

function crearForm()
{
    let atributos:string[] = ["id","first_name","last_name","email","gender","active"]; 
    let container = $('<div class="d-flex justify-content-center">');
    let formulario = $('<form>');
    let formularioCheckbox = $('<div class="form-check">');
    let row = $('<div class="row">');
    row.appendTo(formularioCheckbox);
    atributos.forEach(atributo => {
        let col = $('<div class="col sm-1">');
        let label = $('<label>');
        label.val(atributo);
        label.attr('id',atributo+"Label");
        let check = $('<input>');
        check.attr('type','checkbox');
        col.append(label);
        row.append(col);
        col = $('<div class="col sm-1">');
        col.append(check);
        row.append(col);
    });
    formulario.append(formularioCheckbox);
    container.append(formulario);
    container.append('body');
}

function crearTabla()
{
    let tabla = $('<table class="table">');

}

function agregarPersona()
{

}