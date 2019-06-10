var vector = [1, 3, 4, 5, 2, 4, 3, 5];
/*
function unique(vec){
    var i;
    var out=[];
    var objeto={};

    for(i=0; i< vec.length; i++){
        objeto[vec[i]] = 0;
    }

    for(i in objeto){
        out.push(i);
    }
    return out;
}




*/

Array.prototype.unique=function(a){
    return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
  });


console.log(unique(vector));

/*

console.log(

    vector.filter(function(actual, indiceActual, arr){
        return arr.indexOf(actual, indiceActual +1) < 0;
    })

)

*/