var http =require('http'),
fs=require('fs'),
puerto=4000
http.createServer(function(req,res){

    fs.readFile('./index.html',function(err,data){
        
       if(err) throw err;
       res.write(data);
       res.end();
    });

}).listen(puerto);

console.log("Escuchando en el puerto",puerto);