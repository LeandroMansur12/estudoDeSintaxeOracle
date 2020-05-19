class Cliente
{
    nome;
    cpf;
    agencia;


}

class ContaCorrente{
    
    agencia;
    saldo;

    

    sacar(valor){
       if(this._saldo>=valor){
            this._saldo-=valor;
            return valor;
    }
        else{
            
            console.log("saldo insuficiente");
        }
    }
    deposita(valor){

        if(valor < 0){
            console.log("impossivel depositar este valor");
        }else{

            this._saldo += valor;
        }
    }
}



const cliente1 = new Cliente();
const cliente2 = new Cliente();


cliente1.nome = "leandro fodão"
cliente1.cpf = 1231313;
cliente1.rg = '4243424-23';


cliente2.nome = "Joana Cachorra";
cliente2.cpf =312335;
cliente2.rg = 121312;



const contaCorrenteLeandro = new ContaCorrente();
contaCorrenteLeandro.saldo = 0;
contaCorrenteLeandro.agencia = 1001;
 

contaCorrenteLeandro.saldo= 200;

contaCorrenteLeandro.sacar(500);

console.log(contaCorrenteLeandro.saldo);


console.log(cliente1, cliente2);

const contaCorrenteJoanacachorra = new ContaCorrente();
contaCorrenteJoanacachorra.saldo = 0;


contaCorrenteJoanacachorra.deposita(900);

contaCorrenteJoanacachorra.deposita(900);

const valorSacado = contaCorrenteJoanacachorra.sacar();

console.log("seu saldo Joana: " + contaCorrenteJoanacachorra.saldo);

console.log(valorSacado);

console.log(contaCorrenteLeandro);
