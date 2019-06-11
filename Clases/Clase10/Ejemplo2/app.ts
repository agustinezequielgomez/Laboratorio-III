var variableVar; //Scope global
let variableLet; //Scope de su declaracion;
//Las variables let son estaticas, no pueden cambiar su tipo a lo largo del codigo
let x = "Juan";

x = 23;

console.log(x);
//Por mas que el intellisense marque errores se puede compilar y ejecutar
let x2:number = "Juan";

x2 = 23;

console.log(x2);