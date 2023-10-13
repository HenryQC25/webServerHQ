
const http = require ('http')//se importa el modulo http

//req solicitud   res respuesta
//creando el web server
http.createServer((req,res)=>{
    res.write('hola mundo')
    res.end()
})
.listen(8080) //pone el puerto 8080 a disposicion para visualizar e interactuar con el servidor

console.log('escuchando puerto ',8080); 