const express = require('express')
const app = express()
const port = 8080



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
    console.log(`ejemplo listen  http://localhost:${port}`);
})