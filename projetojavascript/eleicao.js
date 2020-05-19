class candidato
{

    nome;
    voto;

    somaVoto(numero){

       this.voto += numero ;

    }

}

const candidato1 = new candidato();

candidato1.nome = "joao Cusao";
candidato1.voto = 0;

candidato1.somaVoto(1);

console.log("numero de votos: "+ candidato1.voto);


candidato1.somaVoto(1);
candidato1.somaVoto(1);
candidato1.somaVoto(1);
candidato1.somaVoto(1);

console.log("numero de votos: "+ candidato1.voto);


