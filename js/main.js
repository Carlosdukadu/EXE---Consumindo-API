let url = "https://jsonplaceholder.typicode.com/users";
let _labelInput = document.getElementById("labelInput");
let _urlDigitada = document.getElementById("urlDigitada");
let botao = document.getElementById("btnBuscar");
// console.log(botao, "---------------- variavel BOTAO");
const containerEl = document.querySelector(".container");
// var json = [];


/************** PEGAR CLICK E CHAMAR FUNÇÃO GERAR URL ********************/
/*************************************************************************/
botao.addEventListener("click", (e) => {
    console.log(e, "-----click addEventListener----");
    e.stopPropagation;
    this.metodoPrincipal();
});


/************************* MÉTODOS PARA RECEBER PROCESSAR DADOS DA API ******************************/
/****************************************************************************************************/
function metodoFetch(_urlDigitada) {
  
   fetch(_urlDigitada.value)
    .then((response) => response.json())
    .then((response) => gerarCards(response));
}



/************************************ MÉTODO PARA GERAR CARDS **********************************/
/************************************************************************************************/
function gerarCards(myJson) {
    let html = ``;
    let _myson = myJson;
    // myJson = JSON.stringify(myJson)
    _myson.forEach((item) => {
        html +=
            '<div class="card-container">' +
            `<h3 class="card-name card-id"> Nome: ${item.name} </h3>` +
            `<p card-email> e-mail:  ${item.email} </p>` +
            `<p card-username> Nome de usuário:  ${item.username} </p>` +
            "</div>";
    });
    this.enviarDadosParaHtml(html);
}

/************************* MÉTODOS PARA ENVIAR CARDS PARA HTML ******************************/
/********************************************************************************************/
function enviarDadosParaHtml(a) {
    containerEl.innerHTML = a; // insere o conteúdo na div container do HTML
}

/************************* MÉTODOS DE VERIFICAÇÃO CAMPO VAZIO E URL DIFERENTE ******************************/
/***********************************************************************************************************/
function metodoVerificarVazio (campoUrl) {
    return (campoUrl.value === "" ? true : false)
}

function metodoVerificacaoDiferenteDaUrl(campoUrl) {
    return (campoUrl.value !== url ? true : false)
   
}


/************************* MÉTODOS DE MENSAGEM DE ERRO ******************************/
/************************************************************************************/
function mostrarMensagemDeErroVazio() {
    console.log("entrei metodo erro");
    _urlDigitada.classList.add("msgErrorCampoUrlVazio");
    _urlDigitada.placeholder = "insira a url";
    //   _urlDigitada.style.border = "2px solid rgb(255, 26, 26)";
    _labelInput.textContent = "Insira a API de contatos para proseguir!";
    _labelInput.style.display = "block";
    
    modal.style.display = "block";
    //   _msgModal.textContent = "teste";
    document.getElementById('msgModal').innerHTML = 'Campo vazio, insira a API para proseguir!';
}

function mostrarMensagemDeErroUrlDiferente() {
    console.log("entrei metodo erro url diferente");
    _urlDigitada.classList.add("msgErrorCampoUrlVazio");
    _urlDigitada.placeholder = "Campo obrigatório";
    //   _urlDigitada.style.border = "2px solid rgb(255, 26, 26)";
    console.log(_labelInput, "----label input");
    _labelInput.textContent = "URL inválida!";
    _labelInput.style.display = "block";
    
    console.log(_msgModal, '-----msgModal----')
    modal.style.display = "block";
    //   _msgModal.textContent = "teste";
    document.getElementById('msgModal').innerHTML = 'URL não encontrada, insira a API correta!';
}



/************************* MÉTODOS PRINCIPAL ******************************/
/**************************************************************************/
function metodoPrincipal() {
    console.log(metodoVerificarVazio(_urlDigitada))

    if (metodoVerificarVazio(_urlDigitada) === true) {
        mostrarMensagemDeErroVazio()
    }
    else if (metodoVerificacaoDiferenteDaUrl(_urlDigitada) === true) {
        mostrarMensagemDeErroUrlDiferente()

    } else {
        metodoFetch(_urlDigitada);
    }
}


/*
_urlDigitada.addEventListener('keyup', function(e){
    const inputUrl = e.target;
    const valueInputUrl = e.target.value;
    
    if(valueInputUrl.length == url){
        inputUrl.classList.remove('--has-error');
    } else {
        inputUrl.classList.add('--has-error');
    }
})
 
*/

// botao.onclick = this._gerarCards;
// this.gerarCards();
// return JSON.stringify(json);
// this.gerarCards();
//  console.log('Clik no botão para comparar e consultar URL');


//    / Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

let _msgModal = document.getElementsByClassName('msgModal');

// When the user clicks on the button, open the modal
// btn.onclick = function() {
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}