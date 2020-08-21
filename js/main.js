
// var requestURL = 'https://jsonplaceholder.typicode.com/users'

// var request = new XMLHttpRequest();

// request.open('GET', requestURL);

// request.responseType = 'json';
// request.send();
// request.onload = function(){
//     var contatos = request.response;
//     populateHeader(contatos);
//     showContatos(contatos);
// }

// function populateHeader(jsonObj){
//     var contato1 = document.createElement('C1');
//     contato1.textContent = jsonObj['squadName'];
//     header.appendChild(contato1);

//     var contatoPara = document.createElement('p');
//     contatoPara.textContent = 'Home:' + jsonObj['homeTown'] + '//Formed: ' + jsonObj['formed'];
//     header.appendChild(contatoPara);
// }


// function showContatos(jsonObj){
//     var _showContatos = jsonObj['menbers'];

//     for (var i = 0; i < _showContatos.length; i++ ){
//         var 
//     }
// }

var url = 'https://jsonplaceholder.typicode.com/users';

var botao = document.getElementById('btnLupa');
console.log(botao, '---------------- variavel BOTAO')


botao.onclick = function receberApi(){
fetch(url)
// console.log(url, '---------------- variavel url')
.then(response => response.json())
.then(json =>{ 
    console.log(JSON.stringify(json), 'json dentro do fetch')
    // return JSON.stringify(json);
    
    var myJson = json;
    console.log(url, '---------------- variavel url')
    console.log(JSON.stringify(myJson), '-+-+-+--+-+-+-+-+-- variavel myJson')
})






}

