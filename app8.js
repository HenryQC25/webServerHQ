const express = require('express')
const app = express()
const port = 8080

/**
se creo una carpeta public y dentro index.html
se creará un middleware para habilitar la ruta index.html
 */

//servir contenido estatico
app.use(express.static('public'))

//get maneja solicitudes      / indica la raiz
app.get('/',(req,res)=>{
    res.send('Home Page')
})

//para servir en la ruta localhost:8080/hola-mundo
//app get para habilitar rutas
app.get('/hola-mundo',(req,res)=>{
    res.send('hola mundo en su respectiva ruta')
})


 app.get('*',function(req, res){
    res.send('404 | page not found')
 })


app.listen(port,()=>{
    console.log(`ejemplo listen ${port}`);
})