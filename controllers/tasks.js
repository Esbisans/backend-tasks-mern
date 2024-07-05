const {response} = require('express');
const Task = require('../models/Task');

const getTasks = async(req, res) => {

    const tasks = await Task.find();

    res.json({
        ok: true,
        tasks
    });
}

const createTask = async(req, res = response) => {

    const task = new Task(req.body);

    try {

        const taskSaved = await task.save();
        res.json({
            ok: true,
            task: taskSaved
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Please talk to the administrator'
        });
    }
}

const updateTask = async(req, res = response) => {

    const taskId = req.params.id;

    try {

        const task = await Task.findById(taskId);
        if (!task) {
            return res.status(404).json({
                ok: false,
                msg: 'Task not found by id'
            });
        }

        const newTask = {
            ...req.body
        }

        const taskUpdated = await Task.findByIdAndUpdate(taskId, newTask, { new: true });

        res.json({
            ok: true,
            task: taskUpdated
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Please talk to the administrator'
        });
    }

}

const deleteTask = async(req, res = response) => {

    const taskId = req.params.id;

    try { 

        const task = Task.findById(taskId);

        if (!task) {
            return res.status(404).json({
                ok: false,
                msg: 'Task not found by id'
            });
        }

        await Task.findByIdAndDelete(taskId);

        res.json({
            ok: true,
            msg: 'Task deleted'
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Please talk to the administrator'
        });
    }

    res.json({
        ok: true,
        msg: 'deleteTask'
    });
}

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask
}