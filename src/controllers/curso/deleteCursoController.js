import {remove, cursoValidator} from '../../model/cursoModel.js'

export default async function deleteCursoController(req, res, next){
    try{
        const {id} = req.params
        const user = {
            id: +id
        }
        const {success, error, data} = cursoValidator(user, {ano: true})
        if(!success){
            return res.status(400).json({
                message: 'Erro ao excluir o curso, verifique os dados',
                errors: error.flatten().fieldErrors
            })
        }
        const result = await remove(data.id)
        return res.json({
            message: 'Curso excluido com sucesso',
            Curso: result
        })
    } catch(error){
        if(error?.code === 'P2025' && error?.meta?.cause.includes('Record to delete does not exist')){
            return res.status(404).json({
                message: 'Curso não encontrado!',
            })
        }
    }

}