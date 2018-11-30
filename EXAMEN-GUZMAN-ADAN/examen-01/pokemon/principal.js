const fs = require('fs');
const rxjs = require('rxjs');

function accederBase() {
    return new Promise((resolve, reject) => {
        fs.readFile('examen-01/pokemon/data.json', 'utf-8', (errores, datos) => {
            if (errores) {
                console.log("No se ha accedido a la data de la base")
            }
            else {
                resolve({
                    aviso: 'Base leida sin errores',
                    aviso2: 'AccesoCorrecto',
                    base: JSON.parse(datos)
                });
            }
        });
    });
}

leerDataBase().then(acceso =>{
    console.log("Tipos de types")
    acceso.base.map(tipo =>{

       console.log(tipo.types)
   })
});
leerDataBase().then(acceso =>{
    console.log("Tipos de abilities")
    acceso.base.map(tipo =>{
        console.log(tipo.abilities)
    })
});
leerDataBase().then(acceso =>{
    console.log("Tipos de move")
    acceso.base.map(tipo =>{
        console.log(tipo.move)
    })
});
leerDataBase().then(acceso =>{
    acceso.base.map(tipo =>{
        console.log(tipo.types)
        if(dicccinarioTypes.has(tipo.types)){
            dicccinarioTypes.set(tipo.types,tipo.types)
        }
        else{
            dicccinarioTypes.set(tipo.types, tipo.types)
           }
    })
    console.log(types)
});
leerDataBase()().then(acceso =>{
    acceso.base.map(tipo =>{
        if(dicccinarioAbilities.has(tipo.abilities)){
            dicccinarioAbilities.set(tipo.abilities,tipo.abilities)
        }
        else{
            dicccinarioAbilities.set(tipo.abilities, tipo.abilities)
        }
    })
    console.log(dicccinarioAbilities)
});
leerDataBase()().then(acceso =>{
    acceso.base.map(tipo =>{

        if(dicccinarioMove.has(tipo.move)){
            dicccinarioMove.set(tipo.move,tipo.move)
        }
        else{
            dicccinarioMove.set(tipo.move, tipo.move)
        }
    })
    console.log(dicccinarioMove)
});

const dicccinarioTypes = new Pokemons();
const dicccinarioAbilities = new Pokemons();
const dicccinarioMove = new Pokemons();

let allstats = 0;
let respuesta = 0;

class Pokemons {
    constructor () {
    this.items = {
    }
}
get (key) {
    return this.has(key) ? this.items[key] : undefined
}
set (key, value) {
    this.items[key] = value
}
values () {
    const tiposs = []
    for (let key in this.items) {
        if (this.has(key)) {
            tiposs.push(this.items[key])
        }
    }
    return tiposs
}
has (key) {
    return this.items.hasOwnProperty(key)
}
keys () {
    const keys = []
    for (let key in this.items) {
        keys.push(keys)
    }
    return keys
}
getItems () {
    return this.items
}   
}

leerArchivo().then(acceso => {
    acceso.base.forEach((acceso)=>{
        if((acceso.stats!="")){
            allstats += parseInt(acceso.stats)
}
            respuesta += parseInt(acceso.stats)
 })
        const speedTotal = {
            speedTotal:allstats,
            speedTotal: 1000
        }
        console.log(speedTotal)
    })

const nombrePoke = new Pokemons();
nombrePoke.set("A" , false)
nombrePoke.set("B" , false)
nombrePoke.set("C" , false)
nombrePoke.set("D" , false)
nombrePoke.set("E" , false)
nombrePoke.set("F" , false)
nombrePoke.set("G" , false)
nombrePoke.set("H" , false)
nombrePoke.set("I" , false)
nombrePoke.set("J" , false)
nombrePoke.set("K" , false)
nombrePoke.set("L" , false)
nombrePoke.set("M" , false)
nombrePoke.set("N" , false)
nombrePoke.set("O" , false)
nombrePoke.set("P" , false)
nombrePoke.set("Q" , false)
nombrePoke.set("R" , false)
nombrePoke.set("S" , false)
nombrePoke.set("T" , false)
nombrePoke.set("U" , false)
nombrePoke.set("V" , false)
nombrePoke.set("W" , false)
nombrePoke.set("X" , false)
nombrePoke.set("Y" , false)
nombrePoke.set("Z" , false)
nombrePoke.set("a" , false)
nombrePoke.set("b" , false)
nombrePoke.set("c" , false)
nombrePoke.set("d" , false)
nombrePoke.set("e" , false)
nombrePoke.set("f" , false)
nombrePoke.set("g" , false)
nombrePoke.set("h" , false)
nombrePoke.set("i" , false)
nombrePoke.set("j" , false)
nombrePoke.set("k" , false)
nombrePoke.set("l" , false)
nombrePoke.set("m" , false)
nombrePoke.set("n" , false)
nombrePoke.set("o" , false)
nombrePoke.set("p" , false)
nombrePoke.set("q" , false)
nombrePoke.set("r" , false)
nombrePoke.set("s" , false)
nombrePoke.set("t" , false)
nombrePoke.set("u" , false)
nombrePoke.set("v" , false)
nombrePoke.set("w" , false)
nombrePoke.set("x" , false)
nombrePoke.set("y" , false)
nombrePoke.set("z" , false)

leerDataBase().then(nombrePoke => {
    nombrePoke.base.forEach(tipo => {
        const vectorPokemons = tipo.nomP.split('');

        if(nombrePoke.has(vectorPokemons[0])){
            nombrePoke.set(vectorPokemons[0],true)
        }
        else{
            nombrePoke.set(vectorPokemons[0], false)
        }
    });
    console.log(nombrePoke);
});
const allPokes = new Pokemons();

leerArchivo().then(tipo => {
    tipo.base.forEach(tipo => {
        const nomP = tipo.name
        const pokemonss = tipo.pokemonss.length
        console.log(nomP ,tipo.pokemonss.length)
        if(allPokes.has(nomP)){
            allPokes.set(nomP, pokemonss)
        }
    });
    console.log(allPokes);
});
