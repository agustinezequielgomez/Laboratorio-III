 //Defino el objeto y que campos tiene que tener (No hay chance de agregarle mas objetos teniendo esa firma)
let Persona:{edad:number, nombre:string, apellido:string,saberNadar:boolean,getNombre:()=>string} =
{
    nombre:"Juan",
    apellido:"Perez",
    edad:23,
    saberNadar:true,
    //altura:170 no podria agregarse
    getNombre:function():string
    {
        return this.nombre;
    }
};

type PersonaType={edad:number, nombre:string, apellido:string,saberNadar:boolean,getNombre:()=>string};
let p1:PersonaType;

Persona.altura //No permite agregar nuevos atributos/propiedades on the run como si lo permite JS