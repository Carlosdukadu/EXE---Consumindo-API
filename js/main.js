
var requestURL = 'https://jsonplaceholder.typicode.com/users'

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();
request.onload = function(){
    var contatos = request.response;
    populateHeader(contatos);
    showContatos(contatos);
}

function populateHeader(jsonObj){
    var contato1 = document.createElement('C1');
    contato1.textContent = jsonObj['squadName'];
    header.appendChild(contato1);

    var contatoPara = document.createElement('p');
    contatoPara.textContent = 'Home:' + jsonObj['homeTown'] + '//Formed: ' + jsonObj['formed'];
    header.appendChild(contatoPara);
}


function showContatos(jsonObj){
    var _showContatos = jsonObj['menbers'];

    for (var i = 0; i < _showContatos.length; i++ ){
        var 
    }
}
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(json => console.log(json))