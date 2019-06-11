let vec:number[] = [1,2,3,"hola"]; //rompe si uno de los elementos tiene un valor distinto al del tipo de array. Para que lo tome tiene que ser vec[]=[1,2,3,4];
let vec2:any[] = [1,2,3,"hola"]; //Ahi no rompe porque puede usar cualquier tipo de numero
let vec3:number[] = [1,4,3,3]; //let vec3[] = [1,4,3,3]; tambien es posible asi sin que rompa
let tupla:[number,number,number,string] = [1,2,3,"hola"];
