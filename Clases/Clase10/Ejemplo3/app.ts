let x;
let y:number=20;

if(x>y)//Tira que es undefined probablemente
{

}
console.log(x);

let z:number;
console.log(z); //Se usa antes de asignarse

let nombre1:string = "Juan";
let nombre2:string = "Jose";
let nombre3:string = `Bartolo`;//`` -> Backticks: sirve para hacer strings multilinea

console.log(nombre1 + ", " +nombre2+", "+nombre3);

console.log(`${nombre1}, ${nombre2}, ${nombre3}`); //Los backtics permiten concatenar valores de una manera mas simple como si se escribiera un texto normalmente