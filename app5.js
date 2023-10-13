 const express=require('express')
 const app = express()

 app.get('/',function(req,res){
    res.send('Home page')
 })
 
 app.get('/hola-mundo',function(req,res){
    res.send('Hola mundo en su ruta')
 })

 app.listen(8080)