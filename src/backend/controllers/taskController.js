const { getAllTasks, addTask, updateTask, deleteTask, editTask } = require('../models/taskModel');

const getAllTasksController = (req, res) => {
    getAllTasks((err, tasks) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(tasks);
    });
};

const addTaskController = (req, res) => {
    const { title, description } = req.body;
    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }
    addTask(title, description, function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: this.lastID, title, description, completed: 0 });
    });
};

const updateTaskController = (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;

    updateTask(id, completed, function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: `Task with ID ${id} updated.` });
    });
};

const editTaskController = (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    editTask(id, title, description, function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: `Task with ID ${id} updated.` });
    });
};

const deleteTaskController = (req, res) => {
    const { id } = req.params;

    deleteTask(id, function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: `Task with ID ${id} deleted.` });
    });
};

module.exports = {
    getAllTasks: getAllTasksController,
    addTask: addTaskController,
    updateTask: updateTaskController,
    deleteTask: deleteTaskController,
    editTask: editTaskController,
};