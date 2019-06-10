var arr = [1,2,3,4,5,6];
var total  = arr.reduce(function(previo, actual){
    return previo + actual;
}, 0);

console.log(total);