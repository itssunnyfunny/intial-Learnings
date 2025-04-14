import {Router} from 'express'
import {createTodo, updateTodo, getTodo, deleteTodo} from '../controllers/todo'
const router = Router();

router.post("/create")