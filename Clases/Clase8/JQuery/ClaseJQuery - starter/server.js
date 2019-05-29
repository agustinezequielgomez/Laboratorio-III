var port = 3000;
var express=require('express');

var cors = require('cors');
var app=express();
var bodyParser = require('body-parser')

app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.urlencoded({ extended: false }));



function getID(array){
    var maxIndex = array.reduce(function(prev,curr,index){
        if(prev.id>curr.id)
        return prev.id;
        else
        return curr.id;
    });
    return maxIndex+1;
}
function getPathFromCollection(collection){
    if(collection==="personas"){
        return '/data/people.json';
    }
}

app.get('/concatenar', function (req, res) {    
    res.send(req.query.legajo + "-" + req.query.nombre);    
});

app.post('/saludo', function (req, res) {    
    res.send("Hola " + req.body.legajo + "-" + req.body.nombre);    
});

app.get('/holamundo', function (req, res) {   
    require('fs').readFile(__dirname + '/ej16.AjaxFull/load.html', 'utf8', function (err, data) {
        res.send(data); 
    });
       
});

app.get('/traerpersona', function (req, res) {

    var indice = req.query.indice;    
    
    res.send(JSON.stringify(Personas[indice]));    
});

app.get('/traer', function (req, res) {
    require('fs').readFile(__dirname + getPathFromCollection(req.query.collection), 'utf8', function (err, data) {
        if (err) {
            // error handling
        }
        try{
            //var nombre = (req.query.nombre)?req.query.nombre:"";
            //var apellido = (req.query.apellido)?req.query.apellido:"";
           var array = JSON.parse(data);
           res.send(array);
        }
        catch(e){
            console.log(e);
        }
            
    });  
});

app.post('/traerpost', function (req, res) {
    require('fs').readFile(__dirname + getPathFromCollection(req.query.collection), 'utf8', function (err, data) {
        if (err) {
            // error handling
        }
        try{
            var nombre = (req.query.nombre)?req.query.nombre:"";
            var apellido = (req.query.apellido)?req.query.apellido:"";
           var array = JSON.parse(data);/*
           array = array.filter(function(a){
            if((nombre != "") && (apellido != "")){
                return (a.active == true) && (a.first_name == nombre) && (a.last_name == apellido);
            }
            else if((nombre == "") && (apellido != "")){
                return (a.active == true) && (a.last_name == apellido);
            }
            else if((nombre != "") && (apellido == "")){
                return (a.active == true) && (a.first_name == nombre);
            }
            else{
                return a.active == true;
            }
             
           });*/
           res.send(array);
        }
        catch(e){
            console.log(e);
        }
            
    });  
});

app.use(bodyParser.urlencoded({ extended: false })); 

app.post('/agregar', function (req, res) {
    var collection = req.body.collection;
    var nuevoObjeto = req.body.objeto;

        require('fs').readFile(__dirname + getPathFromCollection(collection), 'utf8', function (err, data) {
            if (err) {
                 throw err; // error handling
            }else{
                array = JSON.parse(data);
                nuevoObjeto.id = getID(array);
                nuevoObjeto.active = "true";
                nuevoObjeto.created_dttm = new Date().toLocaleString();
                array.push(nuevoObjeto);
                require('fs').writeFileSync(__dirname + getPathFromCollection(collection), JSON.stringify(array));
                //build response
                var response = {
                    message: "Alta exitosa",
                }
                setTimeout(function(){res.send(response);    },5000);
            }
        });  
});

function remove(a){
    a.active = false;
}

app.get('/eliminar', function (req, res) {

    var id = req.query.id;
    var array = [];
    require('fs').readFile(__dirname + getPathFromCollection(req.query.collection), 'utf8', function (err, data) {
        if (err) {
            // error handling
        }
           array = JSON.parse(data);
           var objectToDelete = array.filter(function(a){
             return a.id == id;
           });
          remove(objectToDelete[0]);
          
          require('fs').writeFileSync(__dirname + getPathFromCollection(req.query.collection), JSON.stringify(array));
          array = array.filter(function(a){
            return a.active == true;
        });
          res.send(array); 
    });  

});

function getID(array){
    if(array.length == 0){
        return 1;
    }
    else if(array.length == 1){
        return 2;
    }
    else{
        var maxIndex = array.reduce(function(prev,curr,index){
            if(prev.id>curr.id)
            return prev.id;
            else
            return curr.id;
        });
        return maxIndex+1;
    }
}

var server=app.listen(port ,function(){
    console.log('Servidor web iniciado. Escuchando en el puerto ' + port);
});