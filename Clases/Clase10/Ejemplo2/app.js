var variableVar; //Scope global
var variableLet; //Scope de su declaracion;
//Las variables let son estaticas, no pueden cambiar su tipo a lo largo del codigo
var x = "Juan";
x = 23;
console.log(x);
//Por mas que el intellisense marque errores se puede compilar y ejecutar
var x2 = "Juan";
x2 = 23;
console.log(x2);
