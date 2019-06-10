//console.log(data);

/*
    realizar las operaciones usando los metodos map,  reduce y filter y combinaciones entre ellos
  */


var soluciones = {};

// Retornar un array con los nombres de los usuarios femeninos

soluciones.usuariosFemeninos = function(usuarios){
    return usuarios
    .filter(function(user){
        return user.genero === 'Female';
    })
    .map(function(user){
        return user.nombre;
    });
}

console.log(soluciones.usuariosFemeninos(data));

// Retornar un array de strings (el email de los usuarios de sexo masculino)

soluciones.mailsVarones = function(usuarios){
   return usuarios
   .filter(function(user)
   {
       return user.genero=="Male";
   })
   .map(function(user)
   {
       return user.email;
   });
}

console.log(soluciones.mailsVarones(data));

// Retornar un array de objetos que solo contengan las claves nombre, email y edad, de todos los usuarios mayores que 'edad'

soluciones.usuariosMayores = function(usuarios, edad){
    return usuarios
    .filter((user)=>
    {
        return (user.edad > edad);
    })
    .map((user)=>
    {
        return {"Nombre":user.nombre,"Email":user.email,"Edad":user.edad};
    });
}

console.log(soluciones.usuariosMayores(data, 40));

  // Retornar un objeto que contenga solo el nombre y la edad del usuario mas grande.

soluciones.usuarioMasGrande = function(usuarios){
    var max = 0;
    var edades = usuarios.map((usuario)=>
    {
        return usuario.edad;
    });
    var maximo = edades.reduce((max,actual)=>
    {
        if(actual > max)
        {
            max = actual;
        }
        return max;
    });
    return usuarios
    .filter((usuario)=>
    {
        return (usuario.edad == maximo);
    })
    .map((usuario)=>
    {
        return {"Nombre":usuario.nombre,"Edad":usuario.edad};
    });
}

console.log(soluciones.usuarioMasGrande(data));

// Retornar el promedio de edad de los usuarios (number)

soluciones.promedio = function(usuarios){
  
    var acumEdad = 0;
    var cantidad = 0;
    var edades = usuarios.map((usuario)=>
    {
        return usuario.edad;
    });
    cantidad = edades.reduce((previo,actual)=>
    {
         acumEdad += actual;
         return cantidad += 1;
    });
    return (acumEdad /cantidad).toFixed(2);
}

console.log("Promedio edad usuarios " + soluciones.promedio(data));

// Retornar el promedio de edad de los usuarios hombres (number)

soluciones.promedioVarones = function(usuarios){
   
   
}

//console.log("Promedio edad Varones " + soluciones.promedioVarones(data));

 // Retornar el promedio de edad de los usuarios mujeres (number)

soluciones.promedioMujeres = function(usuarios){
   
}

//console.log("Promedio edad Mujeres " + soluciones.promedioMujeres(data));