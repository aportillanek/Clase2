var http=require('http'),
    fs=require('fs');

    var file=fs.readFileSync('archivo.csv',function (err, data) {
        if (err) throw err;
        resp.write(data);
        });

    	http.createServer(function (req,res){

         var archivo =file.toString();
         var arr = archivo.split("\n");
         res.writeHead(200,{'Content-Type': 'application/json'});
         res.write(JSON.stringify({arreglo:arr}));
         res.end();

    	}).listen(puerto);

    	console.log("Escuchando en el puerto",puerto);