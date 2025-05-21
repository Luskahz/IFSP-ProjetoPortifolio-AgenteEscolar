import express, { Router } from 'express'
//import dos controllers usados na rota do Curso

import getListCursoController from '../controllers/curso/getCursoController.js' 
import createCursoController from '../controllers/curso/createCursoController.js' 
import updateCursoController from '../controllers/curso/updateCursoController.js'
import deleteCursoController from '../controllers/curso/deleteCursoController.js' 




const router = express.Router()


router.post('/', createCursoController)      //Create route
router.get('/list', getListCursoController)  //read route
router.put('/:id', updateCursoController)    //update route
router.delete('/:id', deleteCursoController) //delete route


export default router