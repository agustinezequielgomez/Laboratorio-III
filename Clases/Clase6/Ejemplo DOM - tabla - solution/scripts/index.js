//Agregar el codigo necesario para cargar un array de objetos en una tabla html(se prohibe usar innerHTML)
//Agregar evento a todos los TD. conseguir los TD con una funcion recursiva que reciba como parametros, el body del HTML, y
//la funcion que asigna el manejador(la tabla ya debera ser parte del DOM).
//Agregar algun estilo por codigo JS
//Agregar algun estilo por hoja de estilo CSS

window.onload = function(){
    //agarro el body
    var body = document.querySelector("body");
    //creo tag tabla
    var tabla = document.createElement("table");
    //creo encabezado
    var thead = document.createElement("thead");
    var trhead = document.createElement("tr");
    for(var j=0;j<Object.keys(data[0]).length;j++){
        //creo td
        var td = document.createElement("td");
        var text =document.createTextNode(Object.keys(data[0])[j]);
        td.appendChild(text);
        trhead.appendChild(td);
    }
    thead.appendChild(trhead);
    //forma 1 de agregar el thead:
    //tabla.appendChild(thead);
    
    //recorro los datos
    for(var i=0;i<data.length;i++){
        //creo tr por cada objeto
        var tr = document.createElement("tr");
        for(var j=0;j<Object.keys(data[i]).length;j++){
            //creo td por cada atributo
            var td = document.createElement("td");
            //podria agregar aca el manejador de evento, pero lo hago al final, con toda la tabla ya creada
            var text =document.createTextNode(Object.values(data[i])[j]);
            td.appendChild(text);
            tr.appendChild(td);
        }
        //agrego la tr con los datos a la tabla
        tabla.appendChild(tr);
    }
    //al final de la iteracion la tabla tiene todos sus datos.
    //forma 2 de agregar el thead:
    tabla.firstChild.before(thead);
    //agrego estilo a la tabla
    tabla.classList.add("borde");
    
   
    
    //inserto la tabla en el body
    body.appendChild(tabla);
//una vez que esta "appendeada" la tabla, la puedo consultar.
thead = document.querySelector("table thead");
for(var i=0;i<thead.querySelectorAll("td").length;i++){
    //recorro todos los "td" dentro del "thead" para poner en mayusculas el textContent
    thead.querySelectorAll("td")[i].textContent = thead.querySelectorAll("td")[i].textContent.toUpperCase();
}
//agrego manejador de eventos a todos los td
    if(body.hasChildNodes){
        recorrerDOM(body,function(node){
            if(node.nodeName == "TD"){
                node.addEventListener("click",function(e){
                    //recupero el ID(asumiendo ID siempre en la primera columna)
                    var id = console.log(e.target.parentNode.firstChild.textContent);

                })
            }
        })
    }
}

function recorrerDOM(node, func) {
    func(node);
    node = node.firstChild;
    while (node) {
        recorrerDOM(node, func);
        node = node.nextSibling;
    }
}