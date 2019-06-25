namespace Clases
{
    export class Persona extends Clases.Humano
    {
        private _id : number;
        private _nombre : string;
        private _apellido : string;
        private _email : string;
        
        public get id() : number {
            return this._id;
        }
        public set id(v : number) {
            this._id = v;
        }
        
        public get nombre() : string {
            return this._nombre;
        }
        public set nombre(v : string) {
            this._nombre = v;
        }
        
        public get apellido() : string {
            return this._apellido;
        }
        public set apellido(v : string) {
            this._apellido = v;
        }
        
        public get email() : string {
            return this._email;
        }
        public set email(v : string) {
            this._email = v;
        }
        
        public constructor(id:number,nombre:string,apellido:string,email:string,age:number,gender:string)
        {
            super(gender,age);
            this.apellido=apellido;
            this.nombre=nombre;
            this.email=email;
            this.id=id;
        }

    }
}