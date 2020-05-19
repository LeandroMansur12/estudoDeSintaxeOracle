
console.log("trabalhando com listas");
const listasDeDestinos= new Array(

    'Salvador', 
    'São Paulo',
    'Rio de Janeiro'

);


console.log("destinos possiveis");

console.log(listasDeDestinos);


listasDeDestinos.push("Artur nogueira");


listasDeDestinos.splice(0,1);

console.log(listasDeDestinos);

listasDeDestinos.push("Jaguariuna"); //adicinando item.

console.log(listasDeDestinos);

console.log(listasDeDestinos[0]);

listasDeDestinos.splice(1,1);//removendo item. 


const idadeComprador = 15;
const estaAcompanhado = false

if(idadeComprador >=18){

    const newLocal = listasDeDestinos[0];
    console.log(newLocal + " boa viagem ");
    console.log( ` vendido ${listasDeDestinos[0]}`);
}

else{
    if(estaAcompanhado){
    const newLocal = listasDeDestinos[0];
    console.log(newLocal + " boa viagem ");
    console.log( ` vendido ${listasDeDestinos[0]}`)
}if(idadeComprador < 18 && estaAcompanhado==false){
    console.log("menor de idade");
    console.log("vaza irmão vc não idade pra comprar nada");
}
}

