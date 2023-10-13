const express = require('express')
const app = express()
const port = 8080


//servir contenido estatico
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.send('Home Page')
})

//para servir en la ruta localhost:8080/hola-mundo
//app get para habilitar rutas
app.get('/hola-mundo',(req,res)=>{
    res.send('hola mundo en su respectiva ruta')
})

//comodín que captura cualquier URL que no haya sido 
//manejada por rutas específicas.
//__dirname se usa para construir la ruta completa al archivo.
//sendfile para enviar un archivo como respuesta. 
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});



app.listen(port,()=>{
    console.log(`ejemplo listen ${port}`);
})