//Dinamizando a estrutura HTML via DOM
//selecionar a div pai


const main = document.getElementById("main")

//criar os botoes 


const botaoVerde = document.createElement("div")
botaoVerde.setAttribute("class", "botaoVerde")

const botaoVermelho = document.createElement("div")
botaoVermelho.setAttribute("class", "botaoVermelho")

const botaoAmarelo = document.createElement("div")
botaoAmarelo.setAttribute("class", "botaoAmarelo")

const botaoAzul = document.createElement("div")
botaoAzul.setAttribute("class", "botaoAzul")

const displayJogo = document.createElement("div")
displayJogo.setAttribute("class", "displayJogo")
displayJogo.id  = 'dpJogo';


//criando coteúdo display e botão que inicia o jogo
let divDisplay = document.createElement("div");
divDisplay.setAttribute("class","divDisplay")
divDisplay.innerHTML = `<p>Bem-vindo ao jogo Genius. Clique no botão Iniciar o jogo para começar!</p>
<input type="button" id="botaoInicia" onclick="iniciaJogo()" value="Iniciar o Jogo">`
displayJogo.appendChild(divDisplay);




//acrescentar o  dentro do main


main.appendChild(displayJogo)
main.appendChild(botaoVerde)
main.appendChild(botaoVermelho)
main.appendChild(botaoAmarelo)
main.appendChild(botaoAzul)

//Acende luz verde


function acendeLuzVerde(){
    botaoVerde.style.filter = "brightness(2)"
    botaoVerde.style.boxShadow = "0px 0px 20px 20px rgb(1, 255, 1)"
}
setTimeout(acendeLuzVerde, 1000)

function apagaLuzVerde(){
    botaoVerde.style.filter = "brightness(50%)"
    botaoVerde.style.boxShadow = "none"
}
setTimeout(apagaLuzVerde, 2000)


//Acende luz vermelha


function acendeLuzVermelha(){
    botaoVermelho.style.filter = "brightness(1)"
    botaoVermelho.style.boxShadow = "0px 0px 20px 20px rgb(248, 53, 53)"
}
setTimeout(acendeLuzVermelha, 1000)

function apagaLuzVermelha(){
    botaoVermelho.style.filter = "brightness(50%)"
    botaoVermelho.style.boxShadow = "none"
}
setTimeout(apagaLuzVermelha, 2000)


//Acende luz amarela


function acendeLuzAmarela(){
    botaoAmarelo.style.filter = "brightness(1)"
    botaoAmarelo.style.boxShadow = "0px 0px 20px 20px rgb(253, 253, 52)"
}
setTimeout(acendeLuzAmarela, 1000)

function apagaLuzAmarela(){
    botaoAmarelo.style.filter = "brightness(50%)"
    botaoAmarelo.style.boxShadow = "none"
}
setTimeout(apagaLuzAmarela, 2000)


//Acende luz azul


function acendeLuzAzul(){
    botaoAzul.style.filter = "brightness(1)"
    botaoAzul.style.boxShadow = "0px 0px 20px 20px rgb(17, 17, 255)"
}
setTimeout(acendeLuzAzul, 1000)

function apagaLuzAzul(){
    botaoAzul.style.filter = "brightness(50%)"
    botaoAzul.style.boxShadow = "none"
}
setTimeout(apagaLuzAzul, 2000)

//Função que retorna um número aleatório entre 1 e 4


function entreUmQuatro(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }


//Função que acende um botão aleatório

function acendeBotaoRandom(){
let varNumBotao = entreUmQuatro(1,4);
    armazenaSequenciaArray(varNumBotao);
    if(varNumBotao === 1){
        setTimeout(acendeLuzVerde, 1000)
        setTimeout(apagaLuzVerde, 2000)
    }
    if(varNumBotao === 2){
        setTimeout(acendeLuzVermelha, 1000)
        setTimeout(apagaLuzVermelha, 2000)
    }
    if(varNumBotao === 3){
        setTimeout(acendeLuzAmarela, 1000)
        setTimeout(apagaLuzAmarela, 2000)
    }
    if(varNumBotao === 4){
        setTimeout(acendeLuzAzul, 1000)
        setTimeout(apagaLuzAzul, 2000)
    }
}

//Função que acende um botão 

function acendeBotao(numBotao){
    let varNumBotao = numBotao;
        armazenaSequenciaArray(varNumBotao);
        if(varNumBotao === 1){
            setTimeout(acendeLuzVerde, 1000)
            setTimeout(apagaLuzVerde, 2000)
        }
        if(varNumBotao === 2){
            setTimeout(acendeLuzVermelha, 1000)
            setTimeout(apagaLuzVermelha, 2000)
        }
        if(varNumBotao === 3){
            setTimeout(acendeLuzAmarela, 1000)
            setTimeout(apagaLuzAmarela, 2000)
        }
        if(varNumBotao === 4){
            setTimeout(acendeLuzAzul, 1000)
            setTimeout(apagaLuzAzul, 2000)
        }
    }
//Função que armazena sequência em um array
let arraySequenciaCorreta  = [];
function armazenaSequenciaArray(numSequencia){
    arraySequenciaCorreta.push(numSequencia);
}

//add evento de click ao botões
let arraySequenciaUsuario = [];
let contSequenciaUsuario = 0;

botaoVerde.addEventListener("click", function(e){
    arraySequenciaUsuario.push(1);
    contSequenciaUsuario++;
})

botaoVermelho.addEventListener("click", function(e){
    arraySequenciaUsuario.push(2);
    contSequenciaUsuario++;
})

botaoAmarelo.addEventListener("click", function(e){
    arraySequenciaUsuario.push(3);
    contSequenciaUsuario++;
})


botaoAzul.addEventListener("click", function(e){
    arraySequenciaUsuario.push(4);
    contSequenciaUsuario++;
})

//Função que faz o jogo funcionar
function iniciaJogo(){
    for(let indexRodada=0; indexRodada<10 ; indexRodada++){
        acendeBotaoRandom();
    }
}

//Função repete sequência

function repeteSequenciaCorreta(arr){
    let botaoCerto=0;
    for(let i = 0; i<arr.length;i++){
        botaoCerto = arr[i];
        if(botaoCerto=== 1){
            setTimeout(acendeLuzVerde, 1000)
            setTimeout(apagaLuzVerde, 2000)
        }
        if(botaoCerto === 2){
            setTimeout(acendeLuzVermelha, 1000)
            setTimeout(apagaLuzVermelha, 2000)
        }
        if(botaoCerto === 3){
            setTimeout(acendeLuzAmarela, 1000)
            setTimeout(apagaLuzAmarela, 2000)
        }
        if(botaoCerto === 4){
            setTimeout(acendeLuzAzul, 1000)
            setTimeout(apagaLuzAzul, 2000)
        }
    }
}


//modal(rever demo)
//1.criar a function modal
//2.selecionar o main
//3.criar o container
//4.criar o form, input e label