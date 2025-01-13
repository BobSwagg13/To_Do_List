const db = require('../to_do_list.db');

const getAllTasks = (callback) => {
    db.all('SELECT * FROM tasks', [], callback);
};

const addTask = (title, description, callback) => {
    db.run('INSERT INTO tasks (title, description) VALUES (?, ?)', [title, description], callback);
};

const updateTask = (id, completed, callback) => {
    db.run('UPDATE tasks SET completed = ? WHERE id = ?', [completed, id], callback);
};

const editTask = (id, title, description, callback) => {
    db.run('UPDATE tasks SET title = ?, description = ? WHERE id = ?', [title, description, id], callback);
};

const deleteTask = (id, callback) => {
    db.run('DELETE FROM tasks WHERE id = ?', [id], callback);
};

module.exports = {
    getAllTasks,
    addTask,
    updateTask,
    deleteTask,
    editTask,
};