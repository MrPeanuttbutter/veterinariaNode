import express from 'express';
import router from './routes/index.js'
import db from './config/db.js'
import serveFavicon from 'serve-favicon';
import path from 'path';
//asignar puerto
const app=express();

// adding favicon
app.use(serveFavicon(path.join('public', 'img', 'favicon.ico')))

//conectar la base de datos

db.authenticate()
    .then(()=> console.log('Database ok'))
    .catch(error=> console.log(error))

const port = process.env.PORT || 4000;

//habilitar PUG (template engine)
app.set('view engine','pug')


//obtener año actual 

app.use((req,res,next)=>{
    const year=new Date();
    
    res.locals.nombresitio='Veterinaria Dondog'
    res.locals.actualYear=year.getFullYear();

    next();
})

//agregar body parser para leer los datos de un formulario
app.use(express.urlencoded({extended:true}));

//agregar Router
app.use('/',router)

//definir la carpeta publica 
app.use(express.static('public'));

app.listen(port,()=>{
    console.log(`app arranco en el puerto ${port}`)
})
































// import express from 'express';
// import router from './routes/index.js';
// import db from './config/db.js';

// const app = express();

// // Conectar la base de datos
// db.authenticate()
//     .then( () => console.log('Base de datos conectada') )
//     .catch( error => console.log(error));


// // Definir puerto
// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//     console.log(`El Servidor esta funcionando en el puerto ${port}`)
// })

// // Habilitar PUG
// app.set('view engine', 'pug');

// // Obtener el año actual
// app.use( (req, res, next) => {
//     const year = new Date();
//     res.locals.actualYear = year.getFullYear();
//     res.locals.nombresitio = "Agencia de Viajes";
//     next();
// });


// // Habilitar express.json
// app.use(express.urlencoded({ extended: false }));


// // Definir la carpeta publica
// app.use(express.static('public'));

// // Agregar Router
// app.use('/', router);


