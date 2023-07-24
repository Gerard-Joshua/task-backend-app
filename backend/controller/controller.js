const Taskdb = require('../model/model.js');

/* Retrieve all task */
exports.findAll = async (req, res) => {
    try{
        const allTask = await Taskdb.find();
        res.json(allTask);
    }
    catch(error){
        res.status(500).json({ message: error.message || `Error Occured while retriving task information` });
    }
}

/* Create and save new task */
exports.create = async (req, res) => {
    /* Validate incoming request */
    if(!req.body) {
        return res.status(400).json({ message: `Task cannot be empty` });
    }

    /* Create new task */
    const task = new Taskdb({
        title: req.body.title,
        priority: req.body.priority,
        status: req.body.status,
        tag: req.body.tag
    })

    try {
        /* Save task in the database */
        const saveTask = await task.save();
        res.status(200).json({ message: "Task Created", data: saveTask });
    }
    catch (error) {
        res.status(400).json({ message: error.message || `Some error occured while creating a create operation` })
    }
}

/* Retrieve single task */
exports.find = async (req, res) => {
    try{
        const { id } = req.params;
        const singleTask = await Taskdb.findOne({ _id: id });
        if(!singleTask) {
            return res.status(400).json({ message: `Task does not exist` });
        }
        res.json(singleTask);
    }
    catch(error){
        res.status(500).json({ message: error.message || `Error Occured while retriving task information` });
    }
}

// Update a new identified task by task id
exports.update = async (req, res) => {
    // validate request
    if(!req.body) {
        return res.status(400).send({ message: `Task to update can not be empty` });
    }

    try{
        const { id } = req.params;
        const task = await Taskdb.findOne({ _id: id });
    
        // Task does not exist
        if(!task) {
            return res.status(400).json({ message: `Task does not exist` });
        }

        const updatedTask = await Taskdb.findByIdAndUpdate(id, req.body, { useFindAndModify:false });
        res.status(200).json({ message: "Task Updated", data: task });
    }
    catch (error) {
        res.status(400).json({ message: error.message || `Some error occured while updating an operation` })
    }
}

// Delete a task with specified task id in the request
exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Taskdb.findByIdAndDelete(id);
        
        // Task does not exist
        if(!task) {
            return res.status(400).json({ message: `Task does not exist` });
        }

        res.status(200).json({ message: "Task Deleted" });
    }
    catch (error) {
        res.status(400).json({ message: error.message || `Some error occured while deleting an operation` })
    }
}
