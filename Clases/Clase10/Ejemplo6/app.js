//Tanto el valor de retorno como el de parametros tienen que coincidir
function f1() {
    return "Juan";
}
function f2(a, b) {
    return a + b;
}
function f3(a, b) {
    return a + b;
}
var x; //x es una funcion que recibe dos number y retorna un number
x = f3; //Puedo asignarle a la variable una funcion que lleve la misma firma
