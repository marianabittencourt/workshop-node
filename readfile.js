const fs = require('fs');

fs.readFile('teste.txt','UTF-8', (err, content) => {
    if(err) console.log('Aconteceu um erro');

    console.log(content);

});