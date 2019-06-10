var arr = [1,2,3,4,5,6];
var pares = arr.filter(function(elemento){
    return elemento % 2 == 0;
});

console.log(pares);