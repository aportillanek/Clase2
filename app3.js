var http=require('http');

var _=require('lodash');
var arr=[1,2,3,4,"gato"];
var puerto=8080;

http.createServer(function(req,res){
  
   res.writeHead(200);
   res.write("Saludos a todos");
   _.each(arr,function(val,i){
       console.log(val,"Texto extra");

   });


}).listen(puerto);

console.log("Estamos ejecutando en el puerto",puerto);