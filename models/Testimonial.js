import { Sequelize } from "sequelize";
import db from '../config/db.js';



export const testimonial=db.define('testimoniales',{

    nombre:{
        type:Sequelize.STRING
    },
    correo:{
        type:Sequelize.STRING
    },
    mensaje:{
        type:Sequelize.STRING
    }
})





































// import Sequelize from 'sequelize';
// import db from '../config/db.js';

// export const Testimonial = db.define('testimoniales', {
//     nombre: {
//         type: Sequelize.STRING
//     },
//     correo: {
//         type: Sequelize.STRING
//     },
//     mensaje: {
//         type: Sequelize.STRING
//     }
// });
