// ==== COMANDOS ====

// npm init => CRIAR ARQUIVO PACKAGE.JSON
// node app.js => RODAR app.js
// npm i console-log-hello-world //ADICIONAR DEPENDÊNCIA
// npm i console-log-hello-world --save //ADICIONAR DEPENDÊNCIA REGISTRANDO NO PACKAGE.JSON
// npm i console-log-hello-world --save-dev //ADICIONAR DEPENDÊNCIA REGISTRANDO NO PACKAGE.JSON APENAS PARA DESENVOLVIMENTO
// npm uninstall console-log-hello-world //DESINSTALAR DEPENDÊNCIA
// npm uninstall console-log-hello-world --save //DESINSTALAR DEPENDÊNCIA REMOVENDO O REGISTRO NO PACKAGE.JSON
// npm uninstall console-log-hello-world --save-dev //DESINSTALAR DEPENDÊNCIA REMOVENDO O REGISTRO NO PACKAGE.JSON APENAS PARA DESENVOLVIMENTO
// npm update console-log-hello-world //ATUALIZAR DEPENDÊNCIA
// npm adduser //LOGAR NO NPM
// npm publish //PUBLICAR PROJETO NO NPM
// npm install websocket --save //INSTALAR WEBSOCKET

// == end COMANDOS ==

// ==== PRINCIPAIS FRAMEWORKS ====

// Express.js
// Sails.js
// Hapi.js

// == end PRINCIPAIS FRAMEWORKS ==

// var name = require('./name');

// console.log(name);

var http = require('http');
var handle = require('./handle');

var events = require('events');
const { setMaxListeners } = require('process');
var emiter = new events.EventEmitter(); // CRIA FUNÇÃO QUE ESPERARÁ UM EVENTO ACONTECER 

require('console-log-hello-world'); //CHAMAR MÓDULO EXTERNO ADICIONADO COM NPM

// emiter.on('say', say);
// function say(){
//     console.log('Im saying...');
// }
// emiter.emit('say');

var server = http.createServer(handle.fn);

// ACESSANDO A ROTA LOCALHOST:3000
server.listen(3000, function(){
    console.log('Server is listening at port 3000');
});

