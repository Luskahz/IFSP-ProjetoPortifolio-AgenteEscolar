import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import { welcomeController } from './controllers/welcomeController.js'
import alunoRoutes from './routers/alunoRoutes.js'
import periodoRouter from './routers/periodoRouter.js'
import cursoRouter from './routers/cursoRouter.js'
import professorRoutes from './routers/professorRouter.js';
import disciplinaRoutes from './routers/diciplinaRouter.js';
import notaRouter from './routers/notaRouter.js'

// Carrega variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
 

//--- Rotas Crud's ---
app.use(cors());
app.use(express.json());


// Rotas
app.get('/', welcomeController);
app.use('/alunos', alunoRoutes);
app.use('/periodo', periodoRouter);
app.use('/curso', cursoRouter);
app.use('/professores', professorRoutes); 
app.use('/diciplina', disciplinaRoutes); 
app.use('/nota', notaRouter)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
