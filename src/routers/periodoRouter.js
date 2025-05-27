import express from 'express'
//import dos controllers usados na rota do periodo

import getListPeriodoController from '../controllers/periodo/getPeriodoController.js'
import createPeriodoController from '../controllers/periodo/createPeriodoController.js'
import updatePeriodoController from '../controllers/periodo/updatePeriodoController.js'
import deletePeriodoController from '../controllers/periodo/deletePeriodoController.js'




const router = express.Router()
//crud routes
router.post('/', createPeriodoController)      //create route
router.get('/list', getListPeriodoController)  //read route
router.put('/:id', updatePeriodoController)    //update route
router.delete('/:id', deletePeriodoController) //delete route


//rota alternativas
router.get('/:id', getListPeriodoController)
router.post('/', createPeriodoController)
router.put('/:id', updatePeriodoController)
router.delete('/:id', deletePeriodoController)




export default router


