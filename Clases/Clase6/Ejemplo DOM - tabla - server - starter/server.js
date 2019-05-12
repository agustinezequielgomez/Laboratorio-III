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


function getPathFromCollection(collection){
    if(collection==="personas"){
        return '/data/people.json';
    }
}


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
           var array = JSON.parse(data);
           setTimeout(function(){res.send(array);},1000);
        }
        catch(e){
            console.log(e);
        }
            
    });  
});

app.use(bodyParser.urlencoded({ extended: false })); 

var server=app.listen(port ,function(){
    console.log('Servidor web iniciado.g Escuchando en el puerto ' + port);
});