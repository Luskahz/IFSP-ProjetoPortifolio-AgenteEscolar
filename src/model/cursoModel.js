import { PrismaClient } from '@prisma/client'
import { z } from 'zod'
const prisma = new PrismaClient()

const cursoSchema = z.object({
    id: z.number().positive(),
    nome: z.string().max(100),
    descricao: z.string().max(300),
})

export const cursoValidator = (curso, partial = null) => {
    if(partial){
        return cursoSchema.partial(partial).safeParse(curso)
    }
    return cursoSchema.safeParse(curso)
}

export async function create(curso) {     //create
    const result = await prisma.cursos.create({
        data: curso,
        curso_id: 1
    })
    return result
}
export async function getList() {         //read
    const result = await prisma.cursos.findMany()
    return result
    
}
export async function update(id, curso) { //update
    const result = await prisma.cursos.update({
        where:{
            id
        },
        data: curso
    })
    
}
export async function remove(id) {        // delete
    const result = await prisma.cursos.delete({
        where:{
            id
        }
    })
    
}

