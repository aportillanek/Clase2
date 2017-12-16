var http=require('http'),
    fs=require('fs');
     puerto=4000;
  

    	http.createServer(function (req,res){
         fs.readFile('./index.html',function(err,data){
         if(err) throw err;
         res.writeHead(200,{'Content-Type': 'application/json'});
         res.write(JSON.stringify({nombre:"anthony",password:"12345"}));
         res.end();
          });
    	}).listen(puerto);

    	console.log("Escuchando en el puerto",puerto);