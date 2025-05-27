import * as disciplinaModel from '../../model/diciplinaModel.js';

export const getAll = async (req, res) => {
  try {
    const disciplinas = await disciplinaModel.getList();
    res.json(disciplinas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar disciplinas' });
  }
};

export const getById = async (req, res) => {
  try {
    const disciplina = await disciplinaModel.getById(parseInt(req.params.id));
    if (!disciplina) return res.status(404).json({ error: 'Disciplina não encontrada' });
    res.json(disciplina);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar disciplina' });
  }
};

export const create = async (req, res) => {
  try {
    const nova = await disciplinaModel.create(req.body);
    res.status(201).json(nova);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar disciplina' });
  }
};

export const update = async (req, res) => {
  try {
    const atualizada = await disciplinaModel.update(parseInt(req.params.id), req.body);
    res.json(atualizada);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar disciplina' });
  }
};

export const remove = async (req, res) => {
  try {
    await disciplinaModel.remove(parseInt(req.params.id));
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar disciplina' });
  }
};
