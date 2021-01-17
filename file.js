// fs significa "file system"
var fs = require('fs');

// CRIAR/ESCREVER ARQUIVO
// fs.writeFile('data.txt', 'Hellow world from SON', function(err){
//     if(err){
//         throw err;
//     }
// });

// LER ARQUIVO
// fs.readFile('data.txt', function(err, data){
//     if(err){
//         throw err;
//     }
//     console.log(data.toString('utf8'));
// });

// LISTAR ARQUIVOS DE UM DIRETÓRIO
// fs.readdir('.', function(err, files){
//     if(err){
//         throw err;
//     }
//     for(var file in files){
//         console.log(files[file]);
//     }
// });

// LISTAR ARQUIVOS DE UM DIRETÓRIO FILTRANDO
// fs.readdirSync('.').filter(function(file){
//     return (file.endsWith('.js'));
// }).forEach(function(file){
//     console.log(file);
// });