
//Tanto el valor de retorno como el de parametros tienen que coincidir
function f1():void
{
    return "Juan";
}

function f2(a:number,b:number):void
{
    return a+b;
}

function f3(a:number,b:number):number
{
    return a+b;
}

let x:(a:number,b:number)=>number; //x es una funcion que recibe dos number y retorna un number
x = f3; //Puedo asignarle a la variable una funcion que lleve la misma firma