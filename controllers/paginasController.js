import { Viaje } from "../models/Viaje.js";
import { testimonial } from "../models/Testimonial.js";

const paginaInicio=async (req,res)=>{
    const promiseDB=[];
    promiseDB.push(Viaje.findAll({limit:3}))
    promiseDB.push(testimonial.findAll({limit:3}))
    
    try {
        //ejecuta promises de consulta de viajes y testimoniales a la misma vez.
        const result=await Promise.all(promiseDB)

        res.render('inicio',{
            texto:'Servicios',
            clase:'home',
            servicios:result[0],
            testimoniales:result[1]
        });

    } catch (error) {
        console.log(error)
    }
}

const paginaNosotros=(req,res)=>{ //req - lo que enviamos || res - lo que responde

    const texto='Nosotros'

    res.render('nosotros',{
        texto
    })
}

const paginaServicios= async (req,res)=>{ //req - lo que enviamos || res - lo que responde
    //consulta base de datos
    const servicios=await Viaje.findAll();
    
    res.render('viajes',{
        texto:'Servicios',
        servicios
    })
}

const paginainfoservicio=async (req,res)=>{
   const { slug } = req.params
   
    try {
        const servicio= await Viaje.findOne({ where :{ slug:slug } });

        res.render('viaje',{
            pagina:'Informacion servicio',
            servicio
        })
    } catch (error) {
        console.log(error)
    }

}

const paginaTestimoniales=async (req,res)=>{ //req - lo que enviamos || res - lo que responde
    try {

        const testimoniales = await testimonial.findAll();
        res.render('testimoniales',{
            texto:'Testimoniales',
            testimoniales
        })   
    } catch (error) {
        console.log(error)
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaServicios,
    paginaTestimoniales,
    paginainfoservicio,
}




































// import { Viaje } from '../models/Viaje.js';
// import { Testimonial } from '../models/Testimonial.js';

// const paginaInicio = async (req, res) => {
    
//     const promises = [];

//     promises.push(Viaje.findAll({
//         limit: 3
//     }));

//     promises.push(Testimonial.findAll({
//         limit: 3
//     }));


//     try {
//         // pasar al promise
//         const resultado =  await Promise.all(promises);

//         console.log(resultado[0])

//         res.render('inicio', {
//             viajes : resultado[0],
//             testimoniales: resultado[1],
//             clase : 'home',
//             page: 'Inicio',
//         })
//     } catch (error) {
//         console.log(error);
//     }

// }

// const paginaNosotros = (req, res) => { 
//     res.render('nosotros', {
//         pagina: 'Nosotros'
//     });
// }

// const paginaViajes = async  (req, res) => { 
//     // Consultar BD 
//     const viajes = await Viaje.findAll();
    
//     res.render('viajes', {
//         pagina: 'Próximos Viajes', 
//         viajes,
//     });
// }

// const paginaTestimoniales =  async (req, res)  => {
     
//     try {
//         const testimoniales = await Testimonial.findAll();
//         res.render('testimoniales', {
//             testimoniales,
//             page: 'Testimoniales', 
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }

// // Muestra un viaje por su slug
// const paginaDetalleViaje = async (req, res) => {

//     const { slug } = req.params;

//     try {
//         const viaje = await Viaje.findOne( { where : { slug } });

//         res.render('viaje', {
//             pagina: 'Información Viaje', 
//             viaje
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }

// export {
//     paginaInicio, 
//     paginaNosotros,
//     paginaViajes, 
//     paginaTestimoniales,
//     paginaDetalleViaje
// }