const getAllTask = (req, res) => {
    res.send('Get all tasks');
}


const createTask = (req, res) => {
    res.send('Create a new task');
}

const getTask = (req, res) => {
    res.send('Get a single task');
}

const updateTask = (req, res) => {
    res.send('Update a task');
}

const deleteTask = (req, res) => {
    res.send('Delete a task');
}

module.exports = {
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask
}