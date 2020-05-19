
console.log("trabalhando com condicionais");

// const salvador = 'Salvador';
// const saoPaulo = 'Sao Paulo';
// const rioDeJaneiro = 'Rio de Janeiro' ;


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

listasDeDestinos.push("Jaguariuna");

console.log(listasDeDestinos);

console.log(listasDeDestinos[0]);

listasDeDestinos.push("puta que Pariu");

console.log(listasDeDestinos);

listasDeDestinos.splice(4,1);

console.log(listasDeDestinos);

listasDeDestinos.push("New York");

alert(listasDeDestinos);

document.write(listasDeDestinos);
