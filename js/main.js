let url = "https://jsonplaceholder.typicode.com/users";
let _labelInput = document.getElementById("labelInput");
let _urlDigitada = document.getElementById("urlDigitada");
let botao = document.getElementById("btnLupa");
// console.log(botao, "---------------- variavel BOTAO");
const containerEl = document.querySelector(".container");
// var json = [];

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

/************************* MÉTODOS PARA RECEBER PROCESSAR DADOS DA API ******************************/
/****************************************************************************************************/
function gerarURL() {
  if (_urlDigitada.value === "") {
    metodoVerificarVazio();

    console.log(
      _urlDigitada.value,
      "---------CONSOLE.LOG URL DIGITADA-------------"
    );
    // window.alert("Api não inserida ou API invalida correspondente!");
    return;
  } else {
    fetch(_urlDigitada.value)
      // console.log(url, '---------------- variavel url')
      .then((response) => response.json())
      .then((json) => {
        // myJson = json;
        console.log(JSON.stringify(json), "json dentro do fetch");
        console.log(json, "json dentro do fetch2");

        //CHAMADA DO MÉTODO GERAR CARDS//
        console.log(json.length, "----------myJson ---------");
        this.gerarCards(json);
      });
  }
}

/************** PEGAR CLICK E CHAMAR FUNÇÃO GERAR URL ********************/
/*************************************************************************/
botao.addEventListener("click", (e) => {
  console.log(e, "-----click addEventListener----");
  e.stopPropagation;
  this.gerarURL();
});

function metodoVerificarVazio() {
  console.log("entrei metodo erro");
  _urlDigitada.classList.add("msgErrorCampoUrlVazio");
  _urlDigitada.placeholder = "Campo obrigatório";
  _labelInput.style.display = "block";
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
