"use scrict"

let imagensGloss = ""
let trocar = 0;

const botaoTrocar = document.getElementById("trocar-gloss")

function trocarImagens(){
    if(trocar == 5){
        trocar = 0 
    }
    trocar++
    imagensGloss = `url(./img/gloss${trocar}.jpg)`
    console.log(imagensGloss);

    document.documentElement.style.setProperty('--fundo-bg', imagensGloss)
}

botaoTrocar.addEventListener('click', trocarImagens)