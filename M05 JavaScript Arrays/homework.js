/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   var indice=array.length-1;
   return array[indice];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   var largo= array.length;
   return largo;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   
   var arrayIncrementado = array.map (num => {return num + 1 });
   return arrayIncrementado;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var arrayPalabras= palabras.join(' ');
   return arrayPalabras;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar True si está, o False si no está.
   // Tu código:
   if(array.includes(elemento)===true)
   {
      return true;
   }
   else
   {
      return false;
   }

}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var suma=0;
   for(var i= 0; i< arrayOfNums.length; i++)
   {
      suma=suma+arrayOfNums[i];
   }
   return suma;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:

   var suma=0;
   var promedio=0;
   var cantNotas=resultadosTest.length;

   for(var i= 0; i< resultadosTest.length; i++)
   {
      suma=suma+resultadosTest[i];
   }
   promedio=suma/cantNotas;
   return promedio;

}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var mayor=0;
   
   for(var i= 0; i< arrayOfNums.length; i++)
   {
     if(mayor<arrayOfNums[i])
     {
      mayor=arrayOfNums[i];
     }
   }
  
   return mayor;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:

   var producto=arguments[0];

   if(arguments.length===0)
   {
      return 0;
   }
   else
   {
   if(arguments.length===1)
    {
       return arguments[0];
    }
   else
   {
      for(var i= 1; i< arguments.length; i++)
      {
          producto=producto*arguments[i];
      }
   }
   return producto;
   }
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var contElementos=0;

   for(var i=0 ; i< array.length; i++)
      {
          if(array[i]>18)
          {
            contElementos ++;
          }
      }
   
      return contElementos;

}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   switch(numeroDeDia)
   {
      case 1: return  "Es fin de semana";
          
      case 2: return  "Es dia laboral";
      case 3: return  "Es dia laboral";
      case 4: return  "Es dia laboral";
      case 5: return  "Es dia laboral";
      case 6: return  "Es dia laboral";

      case 7: return  "Es fin de semana";
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar True si el entero inicia con 9 y False en otro caso.
   // Tu código:
   var palabraNum= num.toString();

   var arrayNum =palabraNum.split('');
   
   if(palabraNum[0]==="9")
   {
      return true;
   }
   else
   {
      return false;
   }
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar True.
   // Caso contrario retornar False.
   // Tu código:
   var iguales=array[0];
   for(var i=1; i<array.length; i++)
   {
      if(iguales===array[i])
      {
         return true;
      }
      else
      {
          return false;
      }
   }
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var arrayMeses= [];
   var j=0;

   for(var i=0; i<array.length; i++)
   {
      if(array[i]==="Enero" || array[i]=== "Marzo" ||array[i]==="Noviembre")
      {
         arrayMeses[j]=array[i];
         j++;
      }
   }

   if(arrayMeses.includes("Enero") && arrayMeses.includes("Marzo") && arrayMeses.includes("Noviembre"))
   {
      return arrayMeses;
   }
   else
   {
      return "No se encontraron los meses pedidos";
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tabla=[]

   for(var i=0; i<=10;i++)
   {
      tabla[i]=i*6;
   }
   return tabla;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var mayoresAcien= [];
   var j=0;

   for(var i=0; i< array.length;i++)
   {
      if(array[i]>100)
      {
      mayoresAcien[j]=array[i];
      j++;
      }
   }
   return mayoresAcien;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var i=1;
   var aumento2= [];
   aumento2[0]=num + 2;
   
   while(i<10)
   {  
     if(aumento2[i-1]===i)
     {
       break;
     }
     else
     {
      aumento2.push(aumento2[i-1]+2);
      i++;
     }
     
   }
   if(i<10)
   {
      return "Se interrumpió la ejecución";
   }
   else
   {
      return aumento2;
   }
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var i=0;
   var suma=num;
   var aumentoDos= [];
 
   
   while(i<10)
   {  
      i++;
     if(i===5)
     {
       continue;
     }
     else
     {
      suma= suma+2;
      aumentoDos.push(suma);
     }
   
     
   }  
      return aumentoDos;

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
