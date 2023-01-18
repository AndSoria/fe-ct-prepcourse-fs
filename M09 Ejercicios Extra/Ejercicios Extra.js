/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arrayDeObjeto=[];
   for(var prop in objeto)
   {
      var arrayPar=[];
      arrayPar.push(prop);
      arrayPar.push( objeto[prop] );
      arrayDeObjeto.push(arrayPar);
   }

   return arrayDeObjeto;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   var stringOrdenado =string.split('');
   
   stringOrdenado.sort();

   var cantLetra;

   var objetoString={};

   for(var i=0; i< stringOrdenado.length; i++)
   {
      cantLetra=0;

      for(var j=0; j<stringOrdenado.length; j++)
      {
        
         if(stringOrdenado[i]===stringOrdenado[j])
         {
            cantLetra++;
         }
      }
      objetoString[stringOrdenado[i]]=cantLetra;
   }

   return objetoString;


}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   var arrayString =string.split('');
   var arrayInvertido=[];
   var nuevoString;

   for(var i=0; i<arrayString.length; i++)
   {
      if(arrayString[i]===arrayString[i].toUpperCase())
      {
         arrayInvertido.push(arrayString[i]);
      }
   }

   
   for(var i=0; i<arrayString.length; i++)
   {
      if(arrayString[i]===arrayString[i].toLowerCase())
      {
         arrayInvertido.push(arrayString[i]);
      }
   }

   nuevoString=arrayInvertido.join('');

   return nuevoString;


}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var arrayFrase=frase.split(' ');
   var arrayTemporal=[];
   var fraseMirror;

   for(var i=0; i< arrayFrase.length;i++)
   {
      arrayTemporal=arrayFrase[i].split('');
      arrayTemporal.reverse();
      arrayFrase[i]=arrayTemporal.join('');

   }
   fraseMirror=arrayFrase.join(' ');

   return fraseMirror;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var aString=numero.toString();

   var arrayString=aString.split('');

   var arrayInvertido=arrayString.reverse();

   var numeroInvertido=arrayInvertido.join('');
   
   if(aString===numeroInvertido)
   {
      return "Es capicua";
   }
   else
   {
      return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var arrayString=string.split('');
   var fraseLimpia;
   
   for(var i =0; i< arrayString.length; i++)
   {
      if(arrayString[i]=== "a" || arrayString[i]=== "b" || arrayString[i]==="c")
      {
         arrayString[i]=null;
      }
   }
   fraseLimpia=arrayString.join('');

   return fraseLimpia;
   
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

     arrayOfStrings.sort((a,b)=>a.length - b.length);

     return arrayOfStrings;
   
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var arrayComun=[];

   for(var i=0; i<array1.length; i++)
   {
      for(var j=0; j<array2.length; j++)
      {  
         if(array1[i]===array2[j])
         {
            arrayComun.push(array1[i]);
         }
      }
   }
   return arrayComun;

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
