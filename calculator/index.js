const http = require('http');
const port = 8000;
const fs = require('fs');

const server = http.createServer(requestHandler);


function requestHandler(req, res){
    console.log(req.url);
    fs.readFile('index.html', function(err, data){
        if(err){
            console.log(err);
            return;
        }
        return res.end(data);
    });
}


server.listen(port, function(err){
    if(err)
    {
        console.log(err);
        return;
    }
    console.log("Server is up!");
});