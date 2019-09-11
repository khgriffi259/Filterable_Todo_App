const db = require('../models');

exports.getTodos = async (req, res) => {
    try {
        const todos = await db.Todo.find();
        res.json(todos);
    } catch (error) {
        error.message = "no todos"
        res.status(404).json({
            error: error.message
        });
    }
}

exports.create = async (req, res) => {
    const { text } = req.body;
    try{
        const newTodo = await db.Todo.create({
            text
        });
        const {id, ...todo} = newTodo;
        // console.log('...todo: ', todo);
        res.json(newTodo);
    }catch (error) {
        error.message = "Something went wrong.";
        res.status(400).json({error: error.message});
    }
}

exports.delete = async (req, res) => {
    try {
        const todo = await db.Todo.findById(req.params.todoId);
        const { id } = todo;
        await todo.remove();
        res.json({ id });
    } catch (error) {
        error.message = "Something went wrong.";
        res.status(404).json({error: error.message});
    }
}

exports.complete = async (req, res) => {
    try {
        const todo = await db.Todo.findById(req.params.todoId);
        todo.isComplete = !todo.isComplete;
        await todo.save();
        res.json({todoId: req.params.todoId});
        
    } catch (error) {
        error.message = "Something went wrong.";
        res.status(404).json({error: error.message});
    }
}
