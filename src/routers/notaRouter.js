import express, { Router } from 'express'
//import dos controllers usados na rota do Curso



const router = express.Router()


router.post('/', createNotaController)      //Create route
router.get('/list', getListNotasController)  //read route
router.put('/:id', updateNotasController)    //update route
router.delete('/:id', deleteNotasController) //delete route


export default router