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

//criando coteúdo display e botão que inicia o jogo
let divDisplay = document.createElement("div");
divDisplay.setAttribute("class","divDisplay")

const textWelcome = document.createElement("p")
textWelcome.innerText = "Bem-vindo ao jogo Genius. Clique no botão Iniciar o jogo para começar!"

const buttonIniciar = document.createElement("button")
buttonIniciar.innerText = "Iniciar o jogo"
buttonIniciar.setAttribute("id","botaoIniciar")

displayJogo.appendChild(divDisplay);
displayJogo.appendChild(textWelcome);
displayJogo.appendChild(buttonIniciar);

buttonIniciar.addEventListener("click",function(){
    acendeBotaoRandom();
})


//Função que verifica se botão clicado está correto
function estaCorreto(arr1,arr2){
    const posicao = arr1.length-1;
    console.log(arr1)
    console.log(arr2)
    if(arr1[posicao]===arr2[posicao]){
        if(arr1.length === arr2.length){
            repeteSequenciaCorreta(arrayRespostaCorreta);
            arrayRespostaUsuario = [];
        }
    }
    else{
        window.alert("ERROU")
        arrayRespostaCorreta=[];
        arrayRespostaUsuario=[];
    }
}

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
/*         armazenaSequenciaArray(varNumBotao); */
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
let arrayRespostaCorreta  = [];
function armazenaSequenciaArray(numSequencia){
    arrayRespostaCorreta.push(numSequencia);
}

//add evento de click ao botões
let arrayRespostaUsuario = [];


botaoVerde.addEventListener("click", function(){
    arrayRespostaUsuario.push(1);
    estaCorreto(arrayRespostaUsuario,arrayRespostaCorreta);
    /* contSequenciaUsuario++; */
})

botaoVermelho.addEventListener("click", function(){
    arrayRespostaUsuario.push(2);
    estaCorreto(arrayRespostaUsuario,arrayRespostaCorreta);
    /* contSequenciaUsuario++; */
})

botaoAmarelo.addEventListener("click", function(){
    arrayRespostaUsuario.push(3);
    estaCorreto(arrayRespostaUsuario,arrayRespostaCorreta);
    /* contSequenciaUsuario++; */
})


botaoAzul.addEventListener("click", function(){
    arrayRespostaUsuario.push(4);
    estaCorreto(arrayRespostaUsuario,arrayRespostaCorreta);    
    /* contSequenciaUsuario++; */
})



//Função repete sequência

function repeteSequenciaCorreta(arr){
   /*  arr.forEach((element, i) => {
        setTimeout(() => {
          acendeBotao(element);
        }, i * 2000);
      }); */
      let contador = 0;
      let intervaloBotoes = setInterval(function(){
          acendeBotao(arr[contador])
          contador++
          console.log(contador,arr)
          if(contador>arr.length-1){
              clearInterval(intervaloBotoes);
              setTimeout(acendeBotaoRandom,2000);
          }
      },2000);

}


//modal(rever demo)
//1.criar a function modal
//2.selecionar o main