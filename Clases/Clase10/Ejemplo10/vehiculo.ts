namespace clases
{
    export class vehiculo //Hay que hacerle export para que pueda ser vista desde el namespace u otros archivos
    {
        public marca:string;
        public ruedas:number;
    
        constructor(a:string,b:number)
        {
            this.marca = a;
            this.ruedas = b;
        }
    }
}
