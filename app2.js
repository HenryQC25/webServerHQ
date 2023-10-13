/**
 * paso 1
 * npm init -y 
 * 
 * crear require
 */

//response todo lo que el usuario responde
//require todo lo que el usuario necesita

const http = require('http')   //llamar paquete interno http

//paso 2     

http.createServer((req, res)=>{

    console.log(req);

//código de estado HTTP que se enviará en la respuesta, como 200 (éxito), 
//404 (no encontrado), 500 (error interno del servidor), etc.
//proporcionan información sobre la respuesta, como el tipo de contenido, 
//la longitud del contenido, el estado de la respuesta, entre otros
res.writeHead(200, {'Content-Type':'application/json'})

const persona ={
    id:1,
    nombre: 'henry'
}

//escribirá el contenido del objeto
res.write(JSON.stringify(persona))
res.end();
})
.listen(8080)

console.log('escuchando puerto',8080);

