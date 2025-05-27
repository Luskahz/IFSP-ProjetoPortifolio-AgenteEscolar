import { getList } from "../../model/cursoModel.js"

export default async function getListCursoController(req, res, next){
    try{
        const result = await getList()
        return res.json({
            message: 'Lista de cursos',
            cursos: result
        })
    } catch(error){
        next(error)
    }

}

