namespace Clases
{
    export class Humano
    {
        private gender:string;
        private age:number;

        public get Gender() : string {
            return this.gender;
        }
        public set Gender(v : string) {
            this.gender = v;
        }
       
        public get Age() : number {
            return this.age;
        }
        public set Age(v : number) {
            this.age = v;
        }

        public constructor(gender:string,age:number)
        {
            this.Gender=gender;
            this.Age=age;
        }
    }
}