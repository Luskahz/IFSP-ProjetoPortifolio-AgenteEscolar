import { update, cursoValidator } from "../../model/cursoModel.js"

export default async function updateCursoController(req, res, next){
    try{
        const { id } = req.params
        const curso = req.body
        const dataToValidate = { id: +id, ...curso }

        const { success, error, data: cursoValidated } = cursoValidator(dataToValidate)
        if (!success) {
            return res.status(400).json({
                message: "Erro na validação dos dados para atualização do curso.",
                errors: error.flatten().fieldErrors
            })
        }

        const result = await update(cursoValidated.id, cursoValidated)
        return res.json({
            message: "dados do curso atualizados com sucesso!",
            curso: result
        })
    } catch (error) {
        next(error)
    }
}
