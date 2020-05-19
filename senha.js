

const login1 = "lele";
const senha1 = 1234;


var erros = validarErro();


var mensagem = document.querySelector(".loginInvalido");
mensagem.textContent=erros;





var botao = document.getElementById("btn");

botao.addEventListener("click", function(event){
event.preventDefault();
	const login = document.querySelector(".login").value;

	const senha = document.querySelector(".senha").value;

	


}); 

function validarErro(login, senha){

	var erro = [];


	if( login==login1  && senha==senha1){

				erro.push("pode entrar bem vindo");

	}else{

	

		erro.push("senha ou login incorreto");

	}

	return erro;

}
