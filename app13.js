const express = require('express')
const app = express()
const port = 8080

//utilizacion de hbs para el renderizado de la pagina web
app.set('view engine','hbs')


//contenido estatico donde esta template
app.use(express.static('public3'))
app.get('/',(req,res)=>{
   res.render('home2',{
    nombre: 'Henry Quenun',
    titulo: 'curso node'
   });
})

app.get('/generic',(req,res)=>{
   res.sendFile(__dirname + '/public3/generic.html');
})

//para servir en la ruta localhost:8080/hola-mundo
//app get para habilitar rutas
app.get('/elements',(req,res)=>{
    res.sendFile(__dirname + '/public3/elements.html');
})


app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});



app.listen(port,()=>{
    console.log(`ejemplo listen ${port}`);
})