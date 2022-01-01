const express= require('express');
const app =express();

const port = 9999;

app.use(express.urlencoded({extended: true}));

app.all('/', function (req, res) {
    console.log(req.body);
    res.send('Hello, Express!\n');
});


app.listen(port, function (){
    console.log(`Web server open to ${port}, please open localhost:${port}`);
});