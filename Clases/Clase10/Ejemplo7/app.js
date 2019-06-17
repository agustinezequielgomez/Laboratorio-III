"use strict";
//Defino el objeto y que campos tiene que tener (No hay chance de agregarle mas objetos teniendo esa firma)
var Persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 23,
    saberNadar: true,
    //altura:170 no podria agregarse
    getNombre: function () {
        return this.nombre;
    }
};
var p1;
Persona.altura; //No permite agregar nuevos atributos/propiedades on the run como si lo permite JS
