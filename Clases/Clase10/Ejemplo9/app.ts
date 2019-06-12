class Persona
{
    private _nombre:string;
    private _apellido:string;
    private _edad:number;
    
    constructor(nombre:string,apellido:string,edad:number)
    {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    
    public set Nombre(v : string) {
        this._nombre = v;
    }

    
    public set Apellido(v : string) {
        this._apellido = v;
    }

    
    public set Edad(v : number) {
        this._edad = v;
    }

    
    public get Nombre() : string {
        return this._nombre;
    }

    
    public get Apellido() : string {
        return this._apellido;
    }
    
    public get Edad() : number {
        return this._edad
    }
    
    
    protected presentarse()
    {
        console.log(`Hola soy ${this._nombre} ${this._apellido}`);
    }
}

let p1 = new Persona("Juan","Perez",23);

p1.Nombre = "Ana";

p1.presentarse(); //No puedo acceder al metodo porque es protected

class Empleado extends Persona
{
    public sueldo:number;
    
    constructor(nombre:string,apellido:string,edad:number,sueldo:number)
    {
        super(nombre,apellido,edad);
        this.sueldo = sueldo;
    }

    public presentarse() //Desde el hijo accedo al metodo llamando al metodo del padre
    {
        super.presentarse();
    }

    public toJSON():string
    {
        return `{"nombre":${this.Nombre}, "apellido":${this.Apellido}, "edad":${this.Edad}}`
    }
}


let empleado1 = new Empleado("Jose","Lopez",50,15000);

console.log(empleado1.toJSON());