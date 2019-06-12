//Es necesario hacer ref para que encuentre la clase que esta en otro namespace, si es parte del mismo namespace no es necesario
/// <reference path="./vehiculo.ts" /> 

namespace clases
{
    export class Auto extends vehiculo
    {
        constructor(marca:string, ruedas:number)
        {
            super(marca,ruedas);
        }
    }
}

