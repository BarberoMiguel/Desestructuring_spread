//RESUELVE LOS EJERCICIOS AQUÍ

//### Destructuring arrays ###

//1
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];
let [,ana,] = empleados;

//2
let [luis,,] = empleados;
let emailLuis = luis.email;

//3
let a = 5;
let b = 3;

let letras = [a,b];

[b,a] = letras;

//4
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };
/*
const maximaHoy = HIGH_TEMPERATURES.today;
const maximaManana = HIGH_TEMPERATURES.tomorrow;
*/

let {today: maximaHoy,tomorrow: maximaManana} = HIGH_TEMPERATURES


//### Spread/Rest ###

//5
//sumEveryOther(6, 8, 2, 3, 1); //20
let rest = [];

function sumEveryOther(...rest) {
    return rest.reduce((total, actual) => total + actual, 0);
}

//6
//addOnlyNums(1, "perro", 2, 4); //7
rest = [];
function addOnlyNums(...rest){
    return rest.filter(item => typeof item == "number")
                .reduce((total, actual) => total + actual, 0);
}

//7
//countTheArgs("gato", "perro", "pollo", "oso"); //4

rest = [];
function countTheArgs(...rest){
    return rest.length;
}

//8

function combineTwoArrays(arr1,arr2){
    return [...arr1,...arr2];
}


//9
//onlyUniques("gato", "pollo", "cerdo", "cerdo"); //["gato", "pollo", "cerdo"]
function onlyUniques(...rest) {
    return [...new Set(rest)];
};

//10
rest = [];
function combineAllArrays(...rest) {
  let valores = [];
  for (const el of rest) {
    for (const aux of el) {
        valores.push(aux);
    }
  }
  return valores;
};

//11
/*
Escriba una función llamada **sumAndSquare** 
que reciba cualquier número de argumentos, 
los eleve al cuadrado y devuelva la suma de 
todos los valores cuadrados.
 */
rest = [];
function sumAndSquare(...rest) {
  return rest.map(el => el**2)
              .reduce((total,actual) => total + actual , 0);
};