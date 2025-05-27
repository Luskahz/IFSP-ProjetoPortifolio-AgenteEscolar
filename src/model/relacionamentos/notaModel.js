import { PrismaClient } from '@prisma/client'
import { z } from 'zod'
const prisma = new PrismaClient()

export const notasSchema = z.object({
  aluno_id: z.number({
    required_error: "O ID do aluno é obrigatório",
    invalid_type_error: "O ID do aluno deve ser um número inteiro",
  }),

  disciplina_id: z.number({
    required_error: "O ID da disciplina é obrigatório",
    invalid_type_error: "O ID da disciplina deve ser um número inteiro",
  }),

  periodo_id: z.number({
    required_error: "O ID do período é obrigatório",
    invalid_type_error: "O ID do período deve ser um número inteiro",
  }),

  valor: z
    .number({
      invalid_type_error: "O valor da nota deve ser um número",
    })
    .min(0, "A nota mínima é 0")
    .max(10, "A nota máxima é 10")
    .optional(), // nota pode ser nula

  created_at: z.coerce.date().optional(), // coerce permite receber string e transformar em Date
  updated_at: z.coerce.date().optional(),
});

export const notaValidator = (nota, partial = null) => {
    if(partial){
        return notaSchema.partial(partial).safeParse(nota)
    }
    return notaSchema.safeParse(nota)
}

export async function create(nota) {     //Adciona um aluno na disciplina que esta havendo em um periodo
    const result = await prisma.nota.create({
        data: nota
    })
    return result
}
export async function getList() {         //read
    const result = await prisma.nota.findMany()
    return result
    
}
export async function update(id, nota) { //update
    const result = await prisma.nota.update({
        where:{
            id
        },
        data: nota
    })
    
}
export async function remove(id) {        // delete
    const result = await prisma.nota.delete({
        where:{
            id
        }
    })
    
}

