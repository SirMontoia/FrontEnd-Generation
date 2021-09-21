

/* Formas  de acessar elementos no código (formas são case sensitive):

por Tag : getElementByTagName()
por Id: getElementById()
por Nome: getElementByName()
por Classe: getElementByClassName()
por Seletor: querySelector()


*/

let nome =  window.document.getElementById ('nome')
let email = document.querySelector ('#email')
let assunto = document.querySelector ('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#imagem')

nome.style.width = '100%'
email.style.width = '100%'


function validaNome (){
    let txt = document.querySelector ('#txtNome')
    if(nome.value.length < 3){
    txt.innerHTML = 'Nome inválido'
    txt.style.color = 'red'
} else{
    txt.innerHTML =  'Nome válido!'
    txt.style.color = 'green'
    nomeOk = true
}

}

function validaEmail(){
    let txt = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txt.innerHTML = 'E-mail inválido'
        txt.style.color = 'red'
    }else{
        txt.innerHTML = 'E-mail válido!'
        txt.style.color = 'green'
        emailOk = true
    }
        
    
}

function validaAssunto(){
    let txt = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100){

        txt.innerHTML = ' Seja mais breve por gentileza. Insira no máximo 100 caracteres.'
        txt.style.color = 'red'
        txt.style.display = 'block'
    }
    else{

        txt.style.display = 'none'
        assuntoOk = true
    }


    
}

function enviar() {
if (nomeOk == true && emailOk == true && assuntoOk == true){
    
    alert ('Formulário enviado com sucesso!')

}else{
    alert ('Por favor, preencha o formulário corretamente')
}
}

function imgZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '800px'
}

function imgNormal(){
mapa.style.width = '600px'
mapa.style.height = '600px'
}