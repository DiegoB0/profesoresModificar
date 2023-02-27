import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

//Archivos
import asesoriasRoutes from './routes/asesorias';
import profesoresRoutes from './routes/profesores';
import tutoriasGrupales from './routes/tutoriasGrupales';
import tutoriasIndividuales from './routes/tutoriasIndividuales';
// const bcrypt = require('bcrypt');
// const fileUpload = require('express-fileupload');

// const saltRounds = 10;
// const myPlainTextPassword = 's0//P4$$w0rD';

import { options } from './swaggerOptions';
const specs = swaggerJSDoc(options);

//Inicializar express
const app = express();

//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
// app.use(fileUpload());

//////////////////////////////// RUTAS DE LA API ///////////////////////////////////////////////
app.use(profesoresRoutes);
app.use(asesoriasRoutes);
app.use(tutoriasGrupales);
app.use(tutoriasIndividuales);

//Documentacion
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

export default app;
