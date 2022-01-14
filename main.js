// 1.- var miAlfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
// ¿Cuál es la longitud de la matriz?
// Escribe una función llamada miAlfabetoLongitud que console.logs la longitud de la matriz.
// 2.- Declara e inicializa una matriz llamada 'Planetas' con 5 valores de cadena con nombres de planetas.
// Console.log cada elemento en la matriz.
// También console.log el índice para cada planeta..
// 3.- Console.log cada elemento en esta matriz:
//    var myArr = [ 1, 2, 'Uno', verdadero];

// var miAlfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
// console.log(miAlfabeto.length);

// function miAlfabetoLongitud(arreglo){
//     return console.log(arreglo.length);
// }
// miAlfabetoLongitud(miAlfabeto);

// //2
// let planetas = ["Venus","Tierra","Mercurios","Marte","Neptuno"];
// for(let i = 0; i<planetas.length; i++){
//     console.log(planetas[i],"Indice: "+i);
// }

// //3
// //console.log("Ejercicio tres");
// var myArr = [ 1, 2, 'Uno', true];

// for( let i = 0; i< myArr.length; i++){
//     console.log(myArr[i]);
// }

//Array Multidimensionales
// var elementos = ["CARBONO","OXIGENO","HIERRO"];
// var simbol = ["C","O","Fe"];
// var numAtomico = [6,8,26];
// var tablaPer=[["CARBONO","OXIGENO","HIERRO"],["C","O","Fe"],[6,8,26]];
// console.log("El símbolo del ",elementos[2]," es: ",tablaPer[1][2]);  
// console.log(tablaPer[0][0]);
// console.log(`El ${tablaPer[0][0]} tiene como simbolo la letra ${tablaPer[1][0]} y su número atómico es ${tablaPer[2][0]}`);

// const armando = [[["Manzana","Piña","Sandía"],["Jitomate","Lechuga"],["Gryffindor","Hufflepuff","Slytheryn","Ravenclaw"],["Lentes"]],["Cubone","Rayquaza","Charizard"],[["Sonriente"],["Felíz"],["Triste"],["Sonrojado"],["Entusiasmado"],["Juguetón"]],["Vegetitta","Kokun"]];
// console.log(`El ${armando[0][1][0]} color ${armando[1][2]} se ve ${armando[2][0]} porque vio a ${armando[3][0]}`);

//FELIPEPRUEBA
var carreritas = ["Lucia","Roberto","Maria","Jesus","Andrea", "Jose"];

console.log(`Clasificacion actual: ${carreritas}`);
carreritas[2] = "Andrea";
carreritas[4] = "Maria";
carreritas.pop()
carreritas[1] = "Cristobal"
carreritas[2] = "Fernanda"
carreritas[3] = "Armando"
carreritas[4] = "Roberto"
carreritas[5] = "Andrea"
carreritas[6] = "Jesus"
carreritas[7] = "Maria"
carreritas.unshift("Federico");
console.log(carreritas);
