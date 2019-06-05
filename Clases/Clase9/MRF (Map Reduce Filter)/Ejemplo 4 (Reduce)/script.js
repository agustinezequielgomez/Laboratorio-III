var vec = [3,4,2,6,7,5];

var suma = 0;
console.log("---------for---------");
for(var i = 0; i<vec.length; i++)
{
    suma += vec[i];
}

console.log(suma);

console.log("---------foreach---------");
var suma = 0;
vec.forEach(function(numero)
{
    suma +=numero;
});

console.log(suma);

console.log("---------Reduce---------");
//Reduce devuelve un valor solo, no un objeto
//Empieza desde el segundo elemento.
//El return es el anterior del proximo
//Sirve para hacer acumulaciones y filtrados de maximo y minimo
vec.reduce(function(anterior,actual,indice)
{
    console.log(anterior + " - " + actual);
    return anterior + actual;
},0);