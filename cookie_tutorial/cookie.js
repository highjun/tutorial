const http = require('http');
const cookie = require('cookie');
http.createServer(function(req, res){
    console.log("cookie",req.headers.cookie);
    res.writeHead(200, {
        'Set-Cookie': ['cookie1=OatmealRazen;Expires=Wed, 21 Oct 2021 07:28:00 GMT;', 'cookie2=MintChoco']
    });
    res.end("Cookie Tutorial");
}).listen(3000);