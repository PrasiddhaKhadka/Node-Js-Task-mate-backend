const Task = require('../models/Tasks');

const asyncWrapper = require('../middleware/async');





const getAllTask = asyncWrapper(async(req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({
        tasks
    });
});

const createTask = async(req, res) => {
    try
    {
    const task = await Task.create(req.body);
        res.status(201).json({
            task
        });
    }
    catch(error)
    {
        res.status(400).json({
            msg: error
        });
    }
   
}

const getTask = async(req, res) => {
    // try{
    //     const task = await Task.findById(req.params.id);
    //     res.status(200).json({
    //         task
    //     });
    // }
    // catch(error)
    // {
    //     res.status(404).json({
    //         msg: error
    //     });
    // }
    try {
        const {id:taskId} = req.params;
        const task = await Task.findOne({_id:taskId});
        if(!task)
        {
            return res.status(404).json({
                msg: `No task with id ${taskId}`
            });
        }
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}

const updateTask = async (req, res) => {
    try {
        
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if(!task)
        {
            return res.status(404).json({
                msg: `No task with id ${req.params.id}`
            });
        }
        res.status(200).json({
            task
        });
    } catch (error) {
        res.status(500).json({
            error
        })
        
    }
    // res.json('Update a task');
}

const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if(!task)
        {
            return res.status(404).json({
                msg: `No task with id ${req.params.id}`
            });
        }
        res.status(200).json({
            task
        });
        
    } catch (error) {
        res.status(500).json({
            error
        })
    }
    res.json('Delete a task');
}

module.exports = {
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask
}