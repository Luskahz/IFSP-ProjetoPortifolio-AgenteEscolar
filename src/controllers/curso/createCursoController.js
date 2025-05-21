import { create, cursoValidator } from "../../model/cursoModel.js"

export default async function createCursoController(req, res, next){
    try{
        const curso = req.body
        const {success, error, data: cursoValidated} = cursoValidator(curso, {id: true})
        if(!success){
            return res.status(400).json({
                message: "Erro ao criar o curso, verifique os dados!",
                errors: error.flatten().fieldErrors
            })
        }
    const result = await create(cursoValidated)
    return res.json({
        message: "Curso criado com sucesso!",
        curso: result
    })
    } catch(error){
        next(error)
    }
    

}