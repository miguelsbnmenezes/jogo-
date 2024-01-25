let listadennumeroscolocados = [];
let numeroLimite = 10;
let numsecret = gerarNumero();
let quantidade = 1;

function exibirtextnatela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
}
function mensagemInicial() {
    exibirtextnatela('h1', 'Advinhe o numero');
    exibirtextnatela('p', 'Escolha um numero de 1 e 10');
}
mensagemInicial()


function verificarChute() {
    let tentativa = document.querySelector('input').value

 if ( tentativa== numsecret){
    exibirtextnatela('h1', 'ACERTOU!');
     let palavrasquantidade = quantidade > 1 ? 'tentativas' : 'tentativa'
     let mensagemquantidade = `Você descobriu o numero, com ${quantidade} ${palavrasquantidade}`; 
    exibirtextnatela('p', mensagemquantidade); 
     document.getElementById('reiniciar').removeAttribute('disabled')
}else{
    if( tentativa> numsecret){
        exibirtextnatela ('p', 'O numero é menor');
    } else {
        exibirtextnatela ('p', 'O numero é maior');
    }
    quantidade++; 
    limparcampo ();
}

}
function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite +1)
     let qntDeElementos = listadennumeroscolocados.length
     if(qntDeElementos == numeroLimite){
         listadennumeroscolocados = []
     }
    if(listadennumeroscolocados.includes(numeroEscolhido)){
        return gerarNumero();
    }else {
        listadennumeroscolocados.push(numeroEscolhido)
        console.log(listadennumeroscolocados)
        return numeroEscolhido;
    }
}
function limparcampo(params) {
    tentativa = document.querySelector('input'); 
    tentativa.value = ''; 
}
  function reiniciarjogo(){
      numsecret= gerarNumero();
      limparcampo(); 
      tentativa = 1; 
     mensagemInicial()
     document.getElementById('reiniciar').setAttribute('disabled', true)
  }