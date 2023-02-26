/* Si creamos una alcancía de la siguiente manera, solamente mostrará el valor enviado, 
no guardará la información del dinero que le enviamos. */

function alcancia1(monedas){
    let contenido = 0
    contenido = contenido + monedas
    return contenido
}

const miAlcancia1 = alcancia1
miAlcancia1(5) // 5
miAlcancia1(4) // 4


/* Si utilizamos un closure, entonces la variable en que estará en un scope más elevado 
que la función interior, recordará el ámbito léxico que fue creada. Por lo tanto, cada 
vez que invoquemos cada función, mostrará el dinero ahorrado en la alcancía. 
Notemos que lo que pasa es que la cantidad se almacena/recuerda en las variables de tipo const,
a la cual tiene acceso la función como cantidadInicial (y luego le hace la respectiva suma)

En otras palabras, la varibale queda siendo la función interna guardar*/

function alcancia2(cantidadInicial){
    let contenido = cantidadInicial
    return function guardar(monedas){
      contenido = contenido + monedas
      return contenido
    }
}
  
const miAlcancia2 = alcancia2(2)
miAlcancia2(5) // 7
miAlcancia2(4) // 11

const otraAlcancia = alcancia2(5)
otraAlcancia2(30) // 35
otraAlcancia2(20) // 55