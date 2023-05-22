const http = require('http');
const { getCharById } = require('./Controllers/getCharById');

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes("/rickandmorty/character")) {
       // console.log(req.url.split('/').at(-1))
        const id = req.url.split('/').at(-1);

        getCharById(res, Number(id));
    }
}).listen(3001, "localhost");