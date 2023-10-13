const express = require('express')
const app = express()
const port = 8080

//utilizacion de hbs para el renderizado de la pagina web
app.set('view engine','hbs')
/**
este archivo necesita de la carpeta public 3, ya que todos los archivos del 
template se trasladarán a la carpeta template para hacer un backup
y poder empezar el trabajo de hbs(handlebars) para renderizar el sitio semi 
estático, al momento de compilar app12 el sitio estará roto y saldrá 
la pagina de error.
el hbs me da la capacidad de reutilizar codigo.
 */

//contenido estatico donde esta template
app.use(express.static('public3'))
app.get('/',(req,res)=>{
   res.render('home');
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