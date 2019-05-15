var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');

//app.use(express.static(__dirname));
app.use(express.static(__dirname, {index: 'index.html'}))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/traer', function (req, res) {
    var url = require('url');
    var parts = url.parse(req.url, true);
    var query = parts.query;
    require('fs').readFile(__dirname + getPathFromCollection(query.collection), 'utf8', function (err, data) {
        if (err) {
            throw err; 
        }
        else if(data === undefined){
            throw("No se encontro la data solicitada");
        }

           var array = JSON.parse(data);
           array = array.filter(function(a){
             return a.active == true || a.active == "true";
           });
           var response = {
                message: "Carga exitosa",
                "data":array
           }
           setTimeout(function(){res.send(response);},5000);
    });  
});

app.post('/eliminar', function (req, res) {

    var indice = req.body.id;
    var array;
    require('fs').readFile(__dirname + getPathFromCollection(req.body.collection), 'utf8', function (err, data) {
        if (err) {
            // error handling
        }
           array = JSON.parse(data);
           var objectToDelete = array.filter(function(a){
             return a.id == indice;
           });
          remove(objectToDelete[0]);
          require('fs').writeFileSync(__dirname + getPathFromCollection(req.body.collection), JSON.stringify(array));
          var response = {
              message:"Baja exitosa"
            }
          res.send(response); 
    });  

});

app.post('/agregar', function (req, res) {
    var collection = req.body.collection;
    var nuevoObjeto = req.body.heroe;

        require('fs').readFile(__dirname + getPathFromCollection(collection), 'utf8', function (err, data) {
            if (err) {
                 throw err; // error handling
            }else{
                array = JSON.parse(data);
                //nuevoObjeto.id = getID(array);
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

app.post('/modificar',function (req, res) {
    var object = req.body;
        var array = new Array();
        require('fs').readFile(__dirname + getPathFromCollection(req.body.collection), 'utf8', function (err, data) {
            if (err) {
                    // error handling
            }
            array = JSON.parse(data);
            //obtengo index del id que necesito
            var index = array.findIndex(function(obj){return obj.id === object.heroe.id || obj.id.toString() === object.heroe.id;})
            var aux = array[index];
            object.heroe.active = aux.active;
            object.heroe.created_dttm=aux.created_dttm;
            array[index] = object.heroe;

            require('fs').writeFileSync(__dirname + getPathFromCollection(req.body.collection), JSON.stringify(array));
            var response = {
                message: "Modificacion exitosa",
            }
            res.send(response); 
        });
});

function getPathFromCollection(collection){
    if(collection==="Personas"){
        return '/data/people.json';
    }
    if(collection==="posts"){
        return '/data/posts.json';
    }
    if(collection==="users"){
        return '/data/users.json';
    }
    if(collection==="heroes"){
        return '/data/heroes.json';
    }
}

function remove(a){
    a.active = false;
}

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

http.listen(3000, function(){
  console.log('listening on *:3000');
});