var vec = [3,4,2,6,7,5];

vec.sort();

//Filtro los numeros pares
console.log("-----for-----");
for(var i = 0; i < vec.length; i++)
{
    if(vec[i]%2==0)
    {
        console.log(vec[i]);
    }
}

console.log("-----forEach-----");
vec.forEach((numero)=>
{
    if(numero%2==0)
    {
        console.log(numero);
    }
});

console.log("-----filter-----");
//valor, indice, array
//El return del callback de filter devuelve true o false. La funcion filter se encarga de añadir ese 
//elemento al array resultante si el return es true
var pares = vec.filter(function(numero)
{
    return (numero%2==0);
});

console.log(pares);

console.log("-----filter hombres-----");
var hombres = empleados.filter(function(empleado)
{
    return (empleado.genero === "Male");
})

console.log(hombres);