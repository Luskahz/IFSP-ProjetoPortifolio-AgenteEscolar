import express from 'express';
import {
  getAll,
  getById,
  create,
  update,
  remove
} from '../controllers/Diciplina/diciplinaController.js';

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

export default router;
