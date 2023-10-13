const express = require('express')
const app = express()
const port = 8080


//servir contenido estatico
app.use(express.static('public2'))

app.get('/generic',(req,res)=>{
   res.sendFile(__dirname + '/public2/generic.html');
})

//para servir en la ruta localhost:8080/hola-mundo
//app get para habilitar rutas
app.get('/elements',(req,res)=>{
    res.sendFile(__dirname + '/public2/elements.html');
})


app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});



app.listen(port,()=>{
    console.log(`ejemplo listen ${port}`);
})