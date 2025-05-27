import { create, periodoValidator } from "../../model/periodoModel.js"

export default async function createPeriodoController(req, res, next){
    try{
        const periodo = req.body
        const {success, error, data: periodoValidated} = periodoValidator(periodo, {id: true})
        if(!success){
            return res.status(400).json({
                message: "erro ao iniciar periodo, verifique os dados!",
                errors: error.flatten().fieldErrors
            })
        }
    const result = await create(periodoValidated)
    return res.json({
        message: "Periodo iniciado com sucesso!",
        periodo: result
    })
    } catch(error){
        next(error)
    }
    

}