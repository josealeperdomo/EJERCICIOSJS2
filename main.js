/*
*1)* Crea un Objeto que contenga información sobre libros, donde cada propiedad es el titulo de un libro y su valor es un objeto con detalles adicionales (autor,año de publicación u otra cosa). Utilizar un bucle "FOR IN" para imprimir el titulo y el autor.

*2)* Crea un array de objetos que presenten personas, donde cada objeto tenga propiedades como (nombre,edad y ciudad). Utilizar un bucle "FOR OF" para imprimir el nombre y la ciudad de cada persona.

*3)* Crea un programa que elija una palabra al azar de una lista predefinida y le pida al usuario que adivine la palabra letra por letra. Utilizar bucle "DO WHILE", para continuar solicitando letras hasta que el usuario adivine la palabra o haya cometido un numero máximo de intentos. (Investigar Math.random).

*4)* Crea una clase llamada "Persona" que tenga un constructor que reciba dos parámetros (nombre y edad). La clase debe tener un método "saludar" y que imprima un mensaje de saludo con el nombre y la edad de la persona.

*5)* Crea una clase llamada "Estudiante" que herede de la clase "Persona" del ejercicio anterior. La clase "Estudiante" debe tener un constructor adicional que reciba un parámetro (curso). Agregar un método "presentar" a la clase "Estudiante" que incluya la información del nombre,edad y curso. 

*6)* Crea una función que tome una cadena de texto y dos palabras como argumentos (parámetros), y reemplace todas las ocurrencias de la primera palabra con la segunda palabra.

*7)* Escribe una función que tome un array de objetos, donde cada objeto tiene una propiedad "edad" y filtre los objetos que tienen una edad mayor o igual a 18.

*8)* Dado el siguiente array [{nombre: "Luis", edad: 33, hobbies: ["videojuegos, "musica, "cine"]}, {nombre: "Juanito", edad: 30}, {nombre: "Pedro", edad: 20, hobbies: ["deportes", "leer"]}]. Recorre e imprime cada uno de los valores de cada uno de los elementos.
  
*9)* Agrega un ultimo elemento al array anterior con el nombre de "Maria" y la edad de 25 años

*10)* Encuentra el elemento con el nombre de "Pedro" y elimina el elemento hobbies.

*11)* Encuentra el elemento con el nombre de "Juanito" y agrega un elemento hobbies con el valor de "diseñar".

*12)* Crear una clase llamada "Inventario" que se encargará de gestionar un inventario de productos:

      * La clase "Inventario" debe tener un constructor que inicialice un arreglo vacío llamado productos.

       * Debe haber un método llamado agregarProducto que acepte tres parámetros (nombre, precio, y cantidad). Este método deberá
         agregar un objeto producto al arreglo productos con los datos proporcionados.

       * Debe existir un método llamado calcularValorTotal que calcule y devuelva el valor total del inventario multiplicando el precio por la 
          cantidad para cada producto en el arreglo y sumándolos.

       * Debe haber un método llamado listarProductos que recorra el arreglo productos y muestre en la consola los detalles de cada 
          producto (nombre, precio y cantidad).

       * Crea una instancia de la clase "Inventario" llamada miInventario.

       * Agrega al menos tres productos a miInventario utilizando el método agregarProducto.

       * Llama al método listarProductos en miInventario para mostrar la lista de productos en la consola.

       * Llama al método calcularValorTotal en miInventario y muestra el valor total del inventario en la consola.
*/

//1) Crea un Objeto que contenga información sobre libros, donde cada propiedad es el titulo de un libro y su valor es un objeto con detalles adicionales (autor,año de publicación u otra cosa). Utilizar un bucle "FOR IN" para imprimir el titulo y el autor.

let Libros ={

    RomeoyJulieta:{Autor:'Shakespeare',Ano:1597},

    ElAlquimista:{Autor:'Coehlo',Ano:1988},

    HabitosAtomicos:{Autor:'James',Ano:2020},

    Carmilla:{Autor:'Sheridan',Ano:1872},

    Dracula:{Autor:'Bram',Ano:1897}
}

for(let i in Libros){
        console.log("Título:" + i + ", Autor:" + Libros[i].Autor);
}

console.log(Libros);

//*2)* Crea un array de objetos que presenten personas, donde cada objeto tenga propiedades como (nombre,edad y ciudad). Utilizar un bucle "FOR OF" para imprimir el nombre y la ciudad de cada persona.

let personas = [{nombre: 'Alex', edad: 18, ciudad:'Caracas'},{nombre: 'Julio', edad: 48, ciudad:'Maracaibo'},{nombre: 'Ana', edad: 23, ciudad:'Maracay'},{nombre: 'Valeria', edad: 14, ciudad:'Barinas'},]

for(let i of personas){
    console.log('Nombre:' + i.nombre + ', Ciudad:' + i.ciudad);
}

console.log(personas);

//*3)* Crea un programa que elija una palabra al azar de una lista predefinida y le pida al usuario que adivine la palabra letra por letra. Utilizar bucle "DO WHILE", para continuar solicitando letras hasta que el usuario adivine la palabra o haya cometido un numero máximo de intentos. (Investigar Math.random).


let listadepalabras = ['barcelona', 'madrid', 'sevilla', 'valencia', 'bilbao', 'granada', 'toledo', 'salamanca', 'zaragoza', 'lisboa', 'oporto', 'roma', 'venecia', 'hamburgo', 'bruselas', 'londres', 'edimburgo', 'praga', 'budapest', 'atenas', 'estambul',  'valladolid', 'panama', 'lima', 'bogota', 'quito', 'asuncion', 'buenos aires', 'montevideo', 'caracas', 'santiago', 'brasilia', 'lisboa', 'roma', 'paris', 'londres', 'berlin', 'amsterdam', 'praga', 'budapest', 'atenas', 'estambul', 'tokio']

let palabraAdivinar = listadepalabras[Math.floor(Math.random()* listadepalabras.length)]
let palabraUsuario = ''
let intentos = 0
let slais = 0

do{
    palabraUsuario = palabraUsuario + prompt('ADIVINA LA CIUDAD! Ingresa una letra, tienes 30 intentos (sin tildes ni mayusculas)')
    console.log(palabraUsuario);
    if(palabraUsuario.slice(slais,slais+1) === palabraAdivinar.slice(slais,slais+1)){
        slais++
        console.log('Vas bien');
    }else{
        palabraUsuario = palabraUsuario.slice(0, palabraUsuario.length - 1)
        console.log('Esta letra no es la que sigue en la palabra');
    }
    intentos++
    if(palabraAdivinar!=palabraUsuario){
        console.log('Vas por el intento numero ' + intentos);
    }else{
        console.log('FELICIDADES HAS ENCONTRADO LA PALABRA EN EL INTENTO NUMERO ' + intentos);
    }

    if(intentos === 30 && palabraUsuario != palabraAdivinar){
        console.log('Has fallado, suerte para la proxima! (La palabra era ' + palabraAdivinar + ')');
    }
}while(intentos < 30 && palabraUsuario != palabraAdivinar)



//*4)* Crea una clase llamada "Persona" que tenga un constructor que reciba dos parámetros (nombre y edad). La clase debe tener un método "saludar" y que imprima un mensaje de saludo con el nombre y la edad de la persona.

class Persona{
    constructor(nombre,edad){
        this._nombre = nombre
        this._edad = edad
    }
    get saludar(){
        return `Hola, soy ${this._nombre}. Tengo ${this._edad} años de edad`
    }
}

let persona1 = new Persona('Jose', 17)
let persona2 = new Persona('Luis', 18)
let persona3 = new Persona('Carlos', 48)
console.log(persona1);
console.log(persona1.saludar);
console.log(persona2.saludar);


//*5)* Crea una clase llamada "Estudiante" que herede de la clase "Persona" del ejercicio anterior. La clase "Estudiante" debe tener un constructor adicional que reciba un parámetro (curso). Agregar un método "presentar" a la clase "Estudiante" que incluya la información del nombre,edad y curso. 


class Estudiante extends Persona{
    constructor(nombre, edad, curso){
        super(nombre,edad)
        this._curso = curso
    }
    get presentar(){
        return `Hola, soy ${this._nombre}, tengo ${this._edad} y estoy en el curso de ${this._curso}`
    }
}

let estudiante1 = new Estudiante('Pedro', 19, 'Programación')
let estudiante2 = new Estudiante('Alvaro', 51, 'Diseño Grafico')
let estudiante3 = new Estudiante('Ernesto', 21, 'Diseño Grafico')
console.log(estudiante1);
console.log(estudiante1.presentar);
console.log(estudiante2.presentar);
console.log(estudiante3.presentar);

//*6)* Crea una función que tome una cadena de texto y dos palabras como argumentos (parámetros), y reemplace todas las ocurrencias de la primera palabra con la segunda palabra.

let cadena = 'El viento soplaba fuerte, fuerte, fuerte, haciendo temblar las hojas de los árboles y los tejados de mi fuerte casa.'
console.log(cadena);

function cambiapalabras(texto, palabra1, palabra2){
    return texto.replaceAll(palabra1,palabra2)
}

console.log(cambiapalabras(cadena, 'fuerte', 'debil'));

//*7)* Escribe una función que tome un array de objetos, donde cada objeto tiene una propiedad "edad" y filtre los objetos que tienen una edad mayor o igual a 18.

//let personas = [{nombre: 'Alex', edad: 18, ciudad:'Caracas'},{nombre: 'Julio', edad: 48, ciudad:'Maracaibo'},{nombre: 'Ana', edad: 23, ciudad:'Maracay'},{nombre: 'Valeria', edad: 14, ciudad:'Barinas'},]

let personasMayores = personas.filter(
    function (personas) {
        return personas.edad >= 18
    }
)

console.log(personasMayores);

//*8)* Dado el siguiente array [{nombre: "Luis", edad: 33, hobbies: ["videojuegos, "musica, "cine"]}, {nombre: "Juanito", edad: 30}, {nombre: "Pedro", edad: 20, hobbies: ["deportes", "leer"]}]. Recorre e imprime cada uno de los valores de cada uno de los elementos.

let array = [{nombre: "Luis", edad: 33, hobbies: ["videojuegos", "musica", "cine"]}, {nombre: "Juanito", edad: 30}, {nombre: "Pedro", edad: 20, hobbies: ["deportes", "leer"]}]

console.log(array);

for(let i of array){
    console.log('Nombre:' + i.nombre);
    console.log('Edad:' + i.edad);
    if(i.hobbies == undefined){
    console.log('No tiene hobbies');
    }else{
    console.log('Hobbies:' + i.hobbies);
    }
}

//*9)* Agrega un ultimo elemento al array anterior con el nombre de "Maria" y la edad de 25 años

array.push({nombre:'Maria', edad:25})
console.log(array);

//*10)* Encuentra el elemento con el nombre de "Pedro" y elimina el elemento hobbies.


for(let i in array){
    if(array[i].nombre == 'Pedro'){
        delete array[i].hobbies
    }else{
       
    }
}

console.log(array);

//*11)* Encuentra el elemento con el nombre de "Juanito" y agrega un elemento hobbies con el valor de "diseñar".

for(let i in array){
    if(array[i].nombre == 'Juanito'){
        Object.defineProperty(array[i], 'hobbies', {
            value: ["disenar"]})
    }else{
        
    }
}

console.log(array);
/*
*12)* Crear una clase llamada "Inventario" que se encargará de gestionar un inventario de productos:

      * La clase "Inventario" debe tener un constructor que inicialice un arreglo vacío llamado productos.

       * Debe haber un método llamado agregarProducto que acepte tres parámetros (nombre, precio, y cantidad). Este método deberá
         agregar un objeto producto al arreglo productos con los datos proporcionados.

       * Debe existir un método llamado calcularValorTotal que calcule y devuelva el valor total del inventario multiplicando el precio por la 
          cantidad para cada producto en el arreglo y sumándolos.

       * Debe haber un método llamado listarProductos que recorra el arreglo productos y muestre en la consola los detalles de cada 
          producto (nombre, precio y cantidad).

       * Crea una instancia de la clase "Inventario" llamada miInventario.

       * Agrega al menos tres productos a miInventario utilizando el método agregarProducto.

       * Llama al método listarProductos en miInventario para mostrar la lista de productos en la consola.

       * Llama al método calcularValorTotal en miInventario y muestra el valor total del inventario en la consola.
*/
let valortotal = 0

class Inventario{
    constructor(){
        this._productos = []
    }
    agregarProducto(nombre,precio,cantidad){
        this._productos.push({nombre:nombre, precio:precio, cantidad:cantidad})
    }
    calcularValorTotal(){
        for (let i of this._productos) {
            valortotal = valortotal + (i.precio * i.cantidad)
        }
        return 'El valor total de los productos es de ' + valortotal
    }
    ListarProductos(){
        for (let i of this._productos) {
            console.log('Producto:' + i.nombre + ' Precio:' + i.precio + ' Cantidad:' + i.cantidad);
        }
    }
}

let miInventario = new Inventario
console.log(miInventario);
miInventario.agregarProducto('iPhone 15', 1500, 3)
miInventario.agregarProducto('S23', 700, 5)
miInventario.agregarProducto('Xiaomi 13', 1000, 7)
console.log(miInventario);
console.log(miInventario.ListarProductos());
console.log(miInventario.calcularValorTotal());

