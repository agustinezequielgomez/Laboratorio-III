var vec = [3,4,2,6,7,5];
/*
var dobles = [];

for(var i = 0; i <vec.length; i++)
{
    dobles.push(vec[i]*2);
}

console.log(dobles);

//Otra forma

//vec.forEach(function(elemento) Lo mismo que =>
//Por cada iteracion tomo un elemento del array, no retorna nada foreach
vec.forEach((elemento)=>
{
    dobles.push(elemento*2);
});
*/

//Map: retorna un array con todos los returns de los callbacks de la funcion. Si no hay return manda undefined
//valor: Valor del elemento del array que estoy recorriendo
//indice: Valor del indice (de 0 a la cantidad de elementos que tenga)
//array: retorna el array en cada llamada
var dobles = vec.map((valor, indice, array)=>
{
    return valor*2;
})
//Funciona de igual manera: var dobles = vec.map(valor=>valor*2);
console.log(dobles);