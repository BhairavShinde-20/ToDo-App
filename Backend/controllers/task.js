const userModel = require('../models/task');

// create new user 
exports.createTask = async (req, res) => {
    try {
        const users = await new userModel(req.body).save();
        res.json(users);
    } catch (err) {
        res.json({ err });  
    }
}


// get a user using get methon for read data
exports.getAllTask = async (req, res) => {
    try {
        const users = await userModel.find();
        res.json(users);
    } catch (err) {
        res.json({ err });
    }
}

exports.getTask = async (req, res) => {
    try {
        const users = await userModel.find({ _id:req.params.userID });
        res.json(users);
    } catch (err) {
        res.json({ err });
    }
}
// delete a spacific user using delete method
exports.deleteTask = (req, res) => {
    userModel.findOneAndDelete({ _id:req.params.userID }, (err, data) => {
        if (err) {
            res.json({ err });
        }
        else {
            res.json(data);
        }
    });

}

// update a spacific user using put method
exports.updateTask = (req, res) => {
    userModel.findOneAndUpdate({ _id: req.params.userID },req.body,{new:true}, (err, data) => {
        if (err) {
            res.json({ err });
        }
        else {
            res.json(data);
        }
    });

}