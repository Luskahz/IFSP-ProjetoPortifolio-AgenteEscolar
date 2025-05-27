import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export async function create(disciplina) {
  const result = await prisma.disciplinas.create({
    data: disciplina
  });
  return result;
}

export async function getList() {
  const result = await prisma.disciplinas.findMany();
  return result;
}


export async function getById(id) {
  const result = await prisma.disciplinas.findUnique({
    where: { id: parseInt(id) }
  });
  return result;
}


export async function update(id, disciplina) {
  const result = await prisma.disciplinas.update({
    where: { id: parseInt(id) },
    data: {
      ...disciplina,
      updated_at: new Date()
    }
  });
  return result;
}

export async function remove(id) {
  const result = await prisma.disciplinas.delete({
    where: { id: parseInt(id) }
  });
  return result;
}
