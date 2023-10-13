/**
 * paso 1
 * npm init -y 
 * 
 * crear require
 */

const http = require('http')   //llamar paquete interno http

//paso 2     

http.createServer((req, res)=>{

    

res.setHeader('Content-Disposition','attachment: filename=lista.csv')
res.writeHead(200, {'Content-Type':'application/csv'})
res.write('id, nombre\n')
res.write('1, Henry\n')
res.write('2, isai\n')
res.write('3, quenun\n')
res.write('4, cruz\n')

res.end();
})
.listen(8080)

console.log('escuchando puerto',8080);

