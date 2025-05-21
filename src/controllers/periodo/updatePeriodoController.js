import { update, periodoValidator } from "../../model/periodoModel.js";

export default async function updatePeriodoController(req, res, next){
    try{
        const { id } = req.params;
        const periodo = req.body;
        const dataToValidate = { id: +id, ...periodo };

        const { success, error, data: periodoValidated } = periodoValidator(dataToValidate)
        if (!success) {
            return res.status(400).json({
                message: "Erro na validação dos dados para atualização do período.",
                errors: error.flatten().fieldErrors
            });
        }

        const result = await update(periodoValidated.id, periodoValidated);
        return res.json({
            message: "Período atualizado com sucesso!",
            periodo: result
        });
    } catch (error) {
        next(error);
    }
}
