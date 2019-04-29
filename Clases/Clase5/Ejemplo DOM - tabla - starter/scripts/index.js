window.addEventListener('load',poblarTabla);
window.addEventListener('load',function()
{
    var filas = document.getElementsByClassName("datosBody");
    for(fila of filas)
    {
        fila.addEventListener('click',seleccionarRegistros);
    }
});
window.addEventListener('load',function()
{
    window.addEventListener('click',desSeleccionarFormulario);
});

function poblarTabla()
{
    var tabla = document.getElementById("miTabla");
    
    var fila = document.createElement('tr');

    var header = ["ID","FIRST_NAME","LAST_NAME","EMAIL","GENDER","IP_ADRESS"];

    for(col of header)
    {
        let data = document.createElement('td');
        data.append(col);
        data.setAttribute('class','header');
        fila.appendChild(data);
    }
    tabla.appendChild(fila);
    

    data.forEach(function(persona){
        fila = document.createElement('tr');
        fila.setAttribute('class','datosBody');
        var id = persona.id;
        var fstname = persona.first_name;
        var lstname = persona.last_name;
        var email = persona.email;
        var gender = persona.gender;
        var ip = persona.ip_address;
        var datos = [id,fstname,lstname,email,gender,ip]
        for(variables of datos)
        {
            var tableData = document.createElement('td');
            
            tableData.append(variables);
            fila.appendChild(tableData);
        }
        tabla.appendChild(fila);
    });
}

function seleccionarRegistros()
{
    group = document.getElementById("groupBox");
    formulario = document.getElementById("formulario");
    formulario.style.visibility = "visible";
    var hijos = this.children;
    var labels = ["ID:","Nombre:","Apellido:","Email:","Sexo:","IP:"]
    var div = document.createElement('div');
    for(var i = 0; i< hijos.length; i++)
    {
        var parrafo = document.createElement('p');
        parrafo.append(labels[i]);
        parrafo.append(hijos[i].textContent);
        div.appendChild(parrafo);
    }
    group.appendChild(div);
}

function desSeleccionarFormulario()
{
    console.log(this);
    var formulario = document.getElementById("formulario");
    if(formulario.style.visibility == "visible")
    {
        console.log("AAAAAAAA");
    }
}